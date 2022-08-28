import comics from '../resources/images/comics.jpg';

const ComicsList = () => {
    return (
        <section className="comicses">
            <div className="container">
                <ul className="comicses__list">
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </h3>
                            <div className="comicses__price">
                                9.99$
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                X-Men: Days of Future Past
                            </h3>
                            <div className="comicses__price">
                                NOT AVAILABLE
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </h3>
                            <div className="comicses__price">
                                9.99$
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                X-Men: Days of Future Past
                            </h3>
                            <div className="comicses__price">
                                NOT AVAILABLE
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </h3>
                            <div className="comicses__price">
                                9.99$
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                X-Men: Days of Future Past
                            </h3>
                            <div className="comicses__price">
                                NOT AVAILABLE
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </h3>
                            <div className="comicses__price">
                                9.99$
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                X-Men: Days of Future Past
                            </h3>
                            <div className="comicses__price">
                                NOT AVAILABLE
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </h3>
                            <div className="comicses__price">
                                9.99$
                            </div>
                        </a>
                    </li>
                    <li className="comicses__item">
                        <a href="#" className="comicses__link">
                            <div className="comicses__img">
                                <img src={comics} alt="comics"/>
                            </div>
                            <h3 className="comicses__name title">
                                X-Men: Days of Future Past
                            </h3>
                            <div className="comicses__price">
                                NOT AVAILABLE
                            </div>
                        </a>
                    </li>
                </ul>
                <button className="comicses__more button button_wide">
                    Load more
                </button>
            </div>
        </section>
    )
}

export default ComicsList;