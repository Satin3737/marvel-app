import '../styles/general.scss'
import '../styles/parts/charList.scss'
import MarvelService from "../services/MarvelService";
import {Component} from "react";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import nextId from "react-id-generator";
import PropTypes from "prop-types";
import CharInfo from "./CharInfo";

class CharList extends Component {
    state = {
        char: [],
        loading: true,
        newItemsLoading: false,
        error: false,
        offset: 260,
        charEnded: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (newChar) => {
        let ended = false;
        if (newChar.length < 9) {
            ended = true;
        }
        this.setState(({offset, char}) => ({
            char: [...char, ...newChar],
            loading: false,
            newItemsLoading: false,
            offset: offset + 9,
            charEnded: ended
        }));
    }

    onCharLoading = () => {
        this.setState({
            newItemsLoading: true
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    getCharacters = (offset) => {
        this.onCharLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.getCharacters();
    }

    renderItems = (arr) => {
        return arr.map(obj => {
            return (
                <li
                    key={nextId()}
                    className="characters__item">
                    <button onClick={() => this.props.onCharSelected(obj.id)} className="characters__link">
                        <div className="characters__img">
                            <img style={obj.noThumbnail ? {objectFit: 'contain'} : null}
                                 src={obj.thumbnail}
                                 alt={obj.name}/>
                        </div>
                        <div className="characters__name title">
                            {obj.name}
                        </div>
                    </button>
                </li>
            )
        });
    }

    render() {
        const {char, loading, error, newItemsLoading, offset, charEnded} = this.state;
        const items = this.renderItems(char);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <section className="characters">
                <ul className="characters__list">
                    {content || spinner || errorMessage}
                </ul>
                <button
                    disabled={newItemsLoading}
                    onClick={() => this.getCharacters(offset)}
                    style={{'display': charEnded ? 'none' : 'flex'}}
                    className="characters__more button button_wide">
                    LOAD MORE
                </button>
            </section>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;