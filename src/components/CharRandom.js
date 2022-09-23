import useMarvelService from "../services/MarvelService";
import {useEffect, useState} from "react";
import '../styles/general.scss'
import '../styles/parts/charRandom.scss'
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const CharRandom = () => {
    const {loading, error, getSingleCharacter, clearError} = useMarvelService();
    const [char, setChar] = useState({});

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getSingleCharacter(id)
            .then(onCharLoaded);
    }

    const tryRandomChar = () => {
        updateChar();
    }

    useEffect(() => {
        updateChar();
    }, []);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <Char char={char}/> : null;

    return (
        <section className="random">
            <div className="container">
                <div className="random__wrapper">
                    {spinner || errorMessage || content}
                    <div className="random__item random__item_try">
                        <h2 className="random__title">
                        <span>
                            Random character for today!
                        </span>
                            <span>
                            Do you want to get to know him better?
                        </span>
                        </h2>
                        <div className="random__footer">
                            <div className="random__another">
                                Or choose another one
                            </div>
                            <button onClick={tryRandomChar} className="random__button random__button_try button">
                                Try it
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Char = ({char}) => {
    const {name, description, thumbnail, noThumbnail, homepage, wiki} = char;

    return (
        <div className="random__item random__item_char">
            <div className="random__img">
                <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
            </div>
            <div className="random__info">
                <div>
                    <h3 className="random__name title">
                        {name}
                    </h3>
                    <p className="random__descr">
                        {description}
                    </p>
                </div>
                <div className="random__buttons">
                    <a href={homepage} target="_blank" rel="noreferrer" className="random__button button">
                        Homepage
                    </a>
                    <a href={wiki} target="_blank" rel="noreferrer" className="random__button button button_grey">
                        Wiki
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CharRandom;