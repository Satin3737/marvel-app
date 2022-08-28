import '../styles/app.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import Skeleton from "./Skeleton";
import CharInfo from "./CharInfo";
import CharForm from "./CharForm";
import CharSingle from "./CharSingle";
import ComicsSingle from "./ComicsSingle";

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
            <CharSingle/>
            <ComicsSingle/>
        </main>
    )
}

export default Home;