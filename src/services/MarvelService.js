import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHttp();
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

    const getSingleCharacterByName = async (name) => {
        const res = await request(`${_apiBase}/characters?name=${name}&${_apiKey}`);
        if (res.data.results.length === 0) {
            return 'The character was not found. Check the name and try again!';
        }
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}/comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getSingleComics = async (id) => {
        const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
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
            comicsName: char.comics.items.map(item => item.name),
            comicsId: char.comics.items.map(item => item.resourceURI)
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description ? `${comics.description.slice(0, 190)}...` : 'There is no description for this comics',
            pageCount: comics.pageCount + ' pages',
            price: comics.prices[0].price ? comics.prices[0].price + '$' : 'NOT AVAILABLE',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            noThumbnail: /image_not_available/.test(comics.thumbnail.path),
            creators: comics.creators.items.map(item => item.name)
        }
    }

    return {
        process,
        setProcess,
        clearError,
        getSingleCharacter,
        getAllCharacters,
        getSingleComics,
        getAllComics,
        getSingleCharacterByName
    };
}

export default useMarvelService;