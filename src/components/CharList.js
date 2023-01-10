import useMarvelService from "../services/MarvelService";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import '../styles/general.scss'
import '../styles/parts/charList.scss'
import nextId from "react-id-generator";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import setContentList from "../utils/setContentList";

const CharList = (props) => {
    const {getAllCharacters, process, setProcess} = useMarvelService();
    const [char, setChar] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(260);
    const [charEnded, setCharEnded] = useState(false);

    const onCharLoaded = (newChar) => {
        let ended = false;
        if (newChar.length < 9) {
            ended = true;
        }
        setChar(char => [...char, ...newChar]);
        setNewItemsLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const getCharacters = (offset, initial) => {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllCharacters(offset)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    useEffect(() => {
        getCharacters(offset, true);
    }, []);

    const renderItems = (arr) => {
        return arr.map(obj => {
            return (
                <CSSTransition timeout={500} classNames="characters__transition">
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
                </CSSTransition>
            )
        });
    }

    return (
        <section className="characters">
            <ul className="characters__list">
                <TransitionGroup component={null} >
                    {setContentList(process, () => renderItems(char), newItemsLoading)}
                </TransitionGroup>
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