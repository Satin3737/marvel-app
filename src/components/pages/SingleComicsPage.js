import '../../styles/general.scss'
import '../../styles/parts/comicsSingle.scss'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";

const SingleComicsPage = () => {
    const {comicsId} = useParams();
    const [comics, setComics] = useState(null);
    const {loading, error, clearError, getSingleComics} = useMarvelService();

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }

    const updateComics = () => {
        clearError();
        getSingleComics(comicsId)
            .then(onComicsLoaded);
    }

    useEffect(() => {
        updateComics();
    }, [comicsId]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comics) ? <Comics comics={comics} /> : null;

    return (
        <div className="container">
            <section className="comics">
                {spinner || errorMessage || content}
            </section>
        </div>
    )
}

const Comics = ({comics}) => {
    const {title, description, pageCount, price, thumbnail, noThumbnail} = comics;
    return (
        <div className="comics__wrapper">
            <div className="comics__img">
                <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={title}/>
            </div>
            <div className="comics__info">
                <div className="comics__titles">
                    <h2 className="comics__title">
                        {title}
                    </h2>
                    <Link to="/comics" className="comics__back">
                        Back to all
                    </Link>
                </div>
                <p className="comics__descr">
                    {description}
                </p>
                <div className="comics__pages">
                    {pageCount}
                </div>
                <div className="comics__price">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default SingleComicsPage;