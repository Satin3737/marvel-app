import CharRandom from "../CharRandom";
import CharList from "../CharList";
import CharInfo from "../CharInfo";
import {useState} from "react";

const HomePage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
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
        </>
    )
}

export default HomePage;