import {useState} from "react";
import {Helmet} from "react-helmet";
import {useMediaQuery} from 'react-responsive';
import CharForm from "../CharForm";
import CharInfo from "../CharInfo";
import CharList from "../CharList";
import CharRandom from "../CharRandom";

const HomePage = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <div className="home">
            <Helmet>
                <meta
                    name="Marvel information portal"
                    content="Marvel DB"
                />
                <title>
                    {'Marvel information portal'}
                </title>
            </Helmet>
            <CharRandom/>
            <div className="container">
                <div className="home__wrapper">
                    <div className="home__content">
                        <CharList onCharSelected={onCharSelected} />
                        {isMobile ? <CharForm/> : null}
                    </div>
                    <aside className={`home__sidebar${sidebarOpen ? ' open' : ''}`}>
                        <CharInfo charId={selectedChar} setSidebarOpen={setSidebarOpen}/>
                        {isMobile ? null : <CharForm/>}
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default HomePage;