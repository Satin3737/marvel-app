import {Component} from "react";
import '../styles/general.scss'
import '../styles/parts/charRandom.scss'
import MarvelService from "../services/MarvelService";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class CharRandom extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.getSingleCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <Char char={char}/> : null;

        return (
            <section className="random">
                <div className="container">
                    <div className="random__wrapper">
                        {content || spinner || errorMessage}
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
}

const Char = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;

    return (
        <div className="random__item random__item_char">
            <div className="random__img">
                <img src={thumbnail} alt="random character"/>
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
                    <a href={homepage} target="_blank" className="random__button button">
                        Homepage
                    </a>
                    <a href={wiki} target="_blank" className="random__button button button_grey">
                        Wiki
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CharRandom;