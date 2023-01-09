import '../../../styles/general.scss'
import '../../../styles/parts/comicsSingle.scss'
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Comics = ({data}) => {
    const {title, description, pageCount, price, thumbnail, noThumbnail} = data;
    return (
        <section className="comics">
            <Helmet>
                <meta
                    name={title}
                    content="Marvel DB"
                />
                <title>
                    Marvel information portal | {title} comics book
                </title>
            </Helmet>
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
        </section>
    )
}

export default Comics;