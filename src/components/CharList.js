import '../styles/general.scss'
import '../styles/parts/charList.scss'
import abyss from '../resources/images/char_abyss.jpg'
import adam from '../resources/images/char_adam.jpg'
import calypso from '../resources/images/char_calypso.jpg'
import daimon from '../resources/images/char_daimon.jpg'
import boom from '../resources/images/char_boom.jpg'
import hulk from '../resources/images/char_hulk.jpg'
import loki from '../resources/images/char_loki.jpg'
import wing from '../resources/images/char_wing.jpg'

const CharList = () => {
    return (
        <section className="characters">
            <ul className="characters__list">
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={abyss} alt="abyss"/>
                        </div>
                        <div className="characters__name title">
                            abyss
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={loki} alt="loki"/>
                        </div>
                        <div className="characters__name title">
                            loki
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={adam} alt="adam"/>
                        </div>
                        <div className="characters__name title">
                            Adam Warlock
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={boom} alt="boom"/>
                        </div>
                        <div className="characters__name title">
                            Boom Boom
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={calypso} alt="calypso"/>
                        </div>
                        <div className="characters__name title">
                            Calypso
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={wing} alt="wing"/>
                        </div>
                        <div className="characters__name title">
                            Colleen Wing
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={daimon} alt="daimon"/>
                        </div>
                        <div className="characters__name title">
                            Daimon Hellstrom
                        </div>
                    </a>
                </li>
                <li className="characters__item">
                    <a className="characters__link" href="#">
                        <div className="characters__img">
                            <img src={hulk} alt="hulk"/>
                        </div>
                        <div className="characters__name title">
                            HULK
                        </div>
                    </a>
                </li>
            </ul>
            <button className="characters__more button button_wide">
                LOAD MORE
            </button>
        </section>
    )
}

export default CharList;