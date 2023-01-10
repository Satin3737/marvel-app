import '../styles/general.scss'
import '../styles/parts/charForm.scss'
import {useForm} from "react-hook-form";
import useMarvelService from "../services/MarvelService";
import {Link} from "react-router-dom";
import {useState} from "react";
import setContent from "../utils/setContent";

const CharForm = () => {
    const {getSingleCharacterByName, process, setProcess} = useMarvelService();
    const [findedChar, setFindedChar] = useState(null);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            charName: ''
        },
        mode: "onSubmit"
    });

    const onSubmit = data => {
        getSingleCharacterByName(data.charName)
            .then(setFindedChar)
            .then(() => setProcess('confirmed'));
    };

    const renderResult = (result) => {
        if (typeof result === 'object') {
            return (
                <div className="form__wrapper">
                    <div className="form__message">
                        There is! Visit {result.name} page?
                    </div>
                    <Link to={`/characters/${result.id}`} className="form__submit button button_grey">
                        To page
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="form__wrapper">
                    <div className="form__error">
                        {result}
                    </div>
                </div>
            )
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`form${process === 'loading' ? ' loading' : ''}`}>
            <h4 className="form__title">
                Or find a character by name:
            </h4>
            <div className="form__wrapper">
                <input
                    {...register("charName", {required: true})}
                    type="text"
                    className="form__input"
                    placeholder="Enter name"
                />
                <button className="form__submit button" disabled={process === 'loading'}>
                    Find
                </button>
            </div>
            {setContent(process, () => renderResult(findedChar))}
        </form>
    )
}

export default CharForm;