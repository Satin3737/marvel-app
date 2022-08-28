import '../styles/general.scss'
import '../styles/parts/charRandom.scss'
import char from '../resources/images/random_thor.jpg';

const CharRandom = () => {
    return (
        <section className="random">
            <div className="container">
                <div className="random__wrapper">
                    <div className="random__item random__item_char">
                        <div className="random__img">
                            <img src={char} alt="thor"/>
                        </div>
                        <div className="random__info">
                            <div>
                                <h3 className="random__name title">
                                    Thor
                                </h3>
                                <p className="random__descr">
                                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                                </p>
                            </div>
                            <div className="random__buttons">
                                <a href="#" className="random__button button">
                                    Homepage
                                </a>
                                <a href="#" className="random__button button button_grey">
                                    Wiki
                                </a>
                            </div>
                        </div>
                    </div>
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
                            <a href="#" className="random__button random__button_try button">
                                Try it
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CharRandom;