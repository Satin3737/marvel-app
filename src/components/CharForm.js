import '../styles/general.scss'
import '../styles/parts/charForm.scss'

const CharForm = () => {
    return (
        <form action="#" className="form">
            <h4 className="form__title">
                Or find a character by name:
            </h4>
            <div className="form__wrapper">
                <input type="text" placeholder="Enter name" className="form__input"/>
                <button className="form__submit button">
                    Find
                </button>
            </div>
        </form>
    )
}

export default CharForm;