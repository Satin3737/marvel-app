import '../styles/general.scss'
import '../styles/parts/home.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import Skeleton from "./Skeleton";
import CharInfo from "./CharInfo";
import CharForm from "./CharForm";
import CharSingle from "./CharSingle";
import ComicsSingle from "./ComicsSingle";
import ComicsList from "./ComicsList";

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
            <ComicsList/>
            <CharSingle/>
            <ComicsSingle/>
        </main>
    )
}

export default Home;