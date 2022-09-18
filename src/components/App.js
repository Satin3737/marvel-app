import {useState} from "react";
import '../styles/general.scss'
import '../styles/parts/home.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import CharInfo from "./CharInfo";

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <main className="home">
            <Header/>
            <Banner/>
            <CharRandom/>
            <div className="container">
                <div className="home__wrapper">
                    <div className="home__content">
                        <CharList onCharSelected={onCharSelected}/>
                    </div>
                    <aside className="home__sidebar">
                        <CharInfo charId={selectedChar}/>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default App;