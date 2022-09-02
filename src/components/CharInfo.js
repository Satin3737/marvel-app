import '../styles/general.scss'
import '../styles/parts/charInfo.scss'
import {Component} from "react";
import MarvelService from "../services/MarvelService";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import Skeleton from "./Skeleton";
import nextId from "react-id-generator";

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
        });
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.onCharLoading();
        this.marvelService.getSingleCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    render() {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <Char char={char}/> : null;

        return (
            <section className="info">
                {skeleton || content || errorMessage || spinner}
            </section>
        )
    }
}

const Char = ({char}) => {
    const {name, description, thumbnail, noThumbnail, homepage, wiki, comics} = char;

    return <>
        <div className="info__header">
            <div className="info__img">
                <img style={noThumbnail ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
            </div>
            <div className="info__info">
                <h3 className="info__name title">
                    {name}
                </h3>
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
            {comics.length > 0 ? null : 'Marvel forgot to add this guy to at least one of comics('}
            {comics.map((comics, i) => {
                if (i < 10) {
                    return (
                        <li key={nextId()} className="info__item">
                            <a href="#" className="info__link">
                                {comics}
                            </a>
                        </li>
                    )
                }
            })}
        </ul>
    </>
}

export default CharInfo;