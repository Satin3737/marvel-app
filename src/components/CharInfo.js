import '../styles/general.scss'
import '../styles/parts/charInfo.scss'
import useMarvelService from "../services/MarvelService";
import {useEffect, useState} from "react";
import {useMediaQuery} from 'react-responsive';
import PropTypes from 'prop-types';
import nextId from "react-id-generator";
import {Link} from "react-router-dom";
import setContent from "../utils/setContent";

const CharInfo = (props) => {
    const {charId, setSidebarOpen} = props;
    const {getSingleCharacter, clearError, process, setProcess} = useMarvelService();
    const [char, setChar] = useState(null);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {

        if (!charId) {
            return;
        }
        clearError();
        getSingleCharacter(charId)
            .then(onCharLoaded)
            .then(() => {
                setProcess('confirmed');
                setSidebarOpen(true);
                if (isMobile) {

                }
            });
    }

    useEffect(() => {
        setProcess('skeleton');
        updateChar();
    }, [charId]);

    return (
        <section className="info">
            {setContent(process, Char, {...char, setSidebarOpen})}
        </section>
    )
}

const Char = ({data}) => {
    const {name, description, thumbnail, noThumbnail, homepage, wiki, comicsName, comicsId, setSidebarOpen} = data;
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    let idArray = [];
    comicsId.forEach(item => idArray.push(item.substring(item.lastIndexOf('/') + 1)));

    return (
        <>
            <div className="info__header">
                <div className="info__img">
                    <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
                </div>
                <div className="info__info">
                    <div className="info__titles">
                        <h3 className="info__name title">
                            {name}
                        </h3>
                        {isMobile ?
                            <button onClick={closeSidebar} className="info__close">
                                Close
                            </button>
                            :
                            null
                        }
                    </div>
                    <div className="info__buttons">
                        <a href={homepage} className="info__button button">
                            Homepage
                        </a>
                        <a href={wiki} className="info__button button button_grey">
                            Wiki
                        </a>
                    </div>
                </div>
            </div>
            <p className="info__descr">
                {description}
            </p>
            <h4 className="info__comics">
                Comics:
            </h4>
            <ul className="info__list">
                {comicsName.length > 0 ? null : 'Marvel forgot to add this guy to at least one of comics('}
                {comicsName.map((comics, i) => {
                    if (i < 10) {
                        return (
                            <li key={nextId()} className="info__item">
                                <Link to={`/comics/${idArray[i]}`} className="info__link">
                                    {comics}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;