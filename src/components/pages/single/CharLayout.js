import '../../../styles/general.scss'
import '../../../styles/parts/charSingle.scss'
import {Link} from "react-router-dom";
import nextId from "react-id-generator";
import {Helmet} from "react-helmet";

const Character = ({data}) => {
    const {name, description, thumbnail, noThumbnail, wiki, homepage, comicsName, comicsId} = data;

    let idArray = [];
    comicsId.forEach(item => idArray.push(item.substring(item.lastIndexOf('/') + 1)));

    return (
        <section className="character">
            <Helmet>
                <meta
                    name={name}
                    content="Marvel DB"
                />
                <title>
                    Marvel information portal | {name} character
                </title>
            </Helmet>
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
        </section>
    )
}

export default Character;