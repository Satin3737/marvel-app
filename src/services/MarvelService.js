import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public';
    const _apiKey = 'apikey=2fe45617640974f10b78a62fdfd18c1d';
    const _baseOffset = 260;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getSingleCharacter = async (id) => {
        const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 190)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            noThumbnail: /image_not_available/.test(char.thumbnail.path),
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.map(item => item.name)
        }
    }

    return {loading, error, getSingleCharacter, getAllCharacters, clearError};
}

export default useMarvelService;