import '../styles/general.scss'
import '../styles/parts/comicsSingle.scss'
import comics from '../resources/images/comics.jpg';

const ComicsSingle = () => {
    return (
        <section className="comics">
            <div className="container">
                <div className="comics__wrapper">
                    <div className="comics__img">
                        <img src={comics} alt="comics"/>
                    </div>
                    <div className="comics__info">
                        <div className="comics__titles">
                            <h2 className="comics__title">
                                X-Men: Days of Future Past
                            </h2>
                            <a href="#" className="comics__back">
                                Back to all
                            </a>
                        </div>
                        <p className="comics__descr">
                            Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                        </p>
                        <div className="comics__pages">
                            144 pages
                        </div>
                        <div className="comics__lang">
                            Language: en-us
                        </div>
                        <div className="comics__price">
                            9.99$
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComicsSingle;