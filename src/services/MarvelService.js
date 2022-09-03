class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public';
    _apiKey = 'apikey=2fe45617640974f10b78a62fdfd18c1d';
    _baseOffset = 260;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getSingleCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
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
}

export default MarvelService;