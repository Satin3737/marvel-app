import '../styles/general.scss'
import '../styles/parts/charList.scss'
import MarvelService from "../services/MarvelService";
import {Component} from "react";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

class CharList extends Component {
    state = {
        char: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    getCharacters = () => {
        this.marvelService.getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.getCharacters();
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? char.map(obj => <Character key={obj.id} character={obj}/>) : null;

        return (
            <section className="characters">
                <ul className="characters__list">
                    {content || spinner || errorMessage}
                </ul>
                <button className="characters__more button button_wide">
                    LOAD MORE
                </button>
            </section>
        )
    }
}

const Character = ({character}) => {
    const {name, thumbnail, noThumbnail} = character;
    return (
        <li className="characters__item">
            <a href="#" className="characters__link">
                <div className="characters__img">
                    <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
                </div>
                <div className="characters__name title">
                    {name}
                </div>
            </a>
        </li>
    )
}

export default CharList;