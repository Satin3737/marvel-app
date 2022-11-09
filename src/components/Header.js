import '../styles/general.scss'
import '../styles/parts/header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    const currentPageColor = ({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'});

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <span>Marvel</span> information portal
                    </h1>
                    <nav className="header__nav">
                        <NavLink
                            end
                            to="/"
                            style={currentPageColor}
                            className="header__link"
                        >
                            Characters
                        </NavLink>
                        <span>
                            /
                        </span>
                        <NavLink
                            end
                            to="comics"
                            style={currentPageColor}
                            className="header__link"
                        >
                            Comics
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;