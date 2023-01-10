import CharRandom from "../CharRandom";
import CharList from "../CharList";
import CharInfo from "../CharInfo";
import {useState} from "react";
import CharForm from "../CharForm";
import {Helmet} from "react-helmet";

const HomePage = () => {
    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
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
                        <CharList onCharSelected={onCharSelected}/>
                    </div>
                    <aside className="home__sidebar">
                        <CharInfo charId={selectedChar}/>
                        <CharForm />
                    </aside>
                </div>
            </div>
        </>
    )
}

export default HomePage;