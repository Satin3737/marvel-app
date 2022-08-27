import '../styles/app.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import Skeleton from "./Skeleton";
import CharInfo from "./CharInfo";
import CharForm from "./CharForm";

const Home = () => {
    return (
        <main className="home">
            <Header/>
            <Banner/>
            <CharRandom/>
            <div className="container">
                <div className="home__wrapper">
                    <div className="home__content">
                        <CharList/>
                    </div>
                    <aside className="home__sidebar">
                        <Skeleton/>
                        <CharInfo/>
                        <CharForm/>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Home;