import '../styles/general.scss'
import '../styles/parts/charInfo.scss'
import loki from '../resources/images/char_loki.jpg'

const CharInfo = () => {
    return (
        <section className="info">
            <div className="info__header">
                <div className="info__img">
                    <img src={loki} alt="loki"/>
                </div>
                <div className="info__info">
                    <h3 className="info__name title">
                        Loki
                    </h3>
                    <div className="info__buttons">
                        <a href="#" className="info__button button">
                            Homepage
                        </a>
                        <a href="#" className="info__button button button_grey">
                            Wiki
                        </a>
                    </div>
                </div>
            </div>
            <p className="info__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
            <h4 className="info__comics">
                Comics:
            </h4>
            <ul className="info__list">
                <li className="info__item">
                    <a href="#" className="info__link">
                        All-Winners Squad: Band of Heroes (2011) #3
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Alpha Flight (1983) #50
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Amazing Spider-Man (1999) #503
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Amazing Spider-Man (1999) #504
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Vengeance (2011) #4
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Avengers (1963) #1
                    </a>
                </li>
                <li className="info__item">
                    <a href="#" className="info__link">
                        Avengers (1996) #1
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default CharInfo;