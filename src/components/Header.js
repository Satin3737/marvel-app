import '../styles/general.scss'
import '../styles/parts/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <span>Marvel</span> information portal
                    </h1>
                    <nav className="header__nav">
                        <a href="#" className="header__link header__link_current">
                            Characters
                        </a>
                        <span>
                            /
                        </span>
                        <a href="#" className="header__link">
                            Comics
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;