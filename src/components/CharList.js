import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import '../styles/general.scss'
import '../styles/parts/charList.scss'
import MarvelService from "../services/MarvelService";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import nextId from "react-id-generator";

const CharList = (props) => {

    const [char, setChar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(260);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    const onCharLoaded = (newChar) => {
        let ended = false;
        if (newChar.length < 9) {
            ended = true;
        }

        setChar(char => [...char, ...newChar]);
        setLoading(false);
        setNewItemsLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);

    }

    const onCharLoading = () => {
        setNewItemsLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const getCharacters = (offset) => {
        onCharLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharLoaded)
            .catch(onError);
    }

    useEffect(() => {
        getCharacters();
    }, []);

    const renderItems = (arr) => {
        return arr.map(obj => {
            return (
                <li
                    key={nextId()}
                    className="characters__item">
                    <button onClick={() => props.onCharSelected(obj.id)} className="characters__link">
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

    const items = renderItems(char);
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
                onClick={() => getCharacters(offset)}
                style={{'display': charEnded ? 'none' : 'flex'}}
                className="characters__more button button_wide">
                LOAD MORE
            </button>
        </section>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;