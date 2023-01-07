import '../../styles/general.scss'
import '../../styles/parts/charSingle.scss'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import nextId from "react-id-generator";

const SingleCharPage = () => {
    const {charId} = useParams();
    const [char, setChar] = useState(null);
    const {loading, error, clearError, getSingleCharacter} = useMarvelService();

    const updateChar = () => {
        clearError();
        getSingleCharacter(charId)
            .then(setChar);
    }

    useEffect(() => {
        updateChar();
    }, [charId]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <Character char={char} /> : null;

    return (
        <div className="container">
            <section className="character">
                {spinner || errorMessage || content}
            </section>
        </div>
    )
}

const Character = ({char}) => {
    const {name, description, thumbnail, noThumbnail, wiki, homepage, comicsName, comicsId} = char;

    let idArray = [];
    comicsId.forEach(item => idArray.push(item.substring(item.lastIndexOf('/') + 1)));

    return (
        <div className="character__wrapper">
            <div className="character__img">
                <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
            </div>
            <div className="character__info">
                <div className="character__titles">
                    <h2 className="title">
                        {name}
                    </h2>
                    <Link to="/" className="character__back">
                        Back to all
                    </Link>
                </div>
                <p className="character__descr">
                    {description}
                </p>
                <ul className="character__list">
                    {name} comics list:
                    {comicsName.length > 0 ? null : 'Marvel forgot to add this guy to at least one of comics('}
                    {comicsName.map((comics, i) => {
                        if (i < 10) {
                            return (
                                <li key={nextId()} className="character__item">
                                    <Link to={`/comics/${idArray[i]}`} className="character__link">
                                        {comics}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
                <p className="character__also">
                    Also see it on:
                </p>
                <div className="character__buttons">
                    <a href={homepage} target="_blank" rel="noreferrer" className="button">
                        Homepage
                    </a>
                    <a href={wiki} target="_blank" rel="noreferrer" className="button button_grey">
                        Wiki
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SingleCharPage;