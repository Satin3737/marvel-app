import '../styles/app.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import Skeleton from "./Skeleton";

const Home = () => {
    return (
        <main className="home">
            <Header/>
            <Banner/>
            <CharRandom/>
            <div className="container">
                <div className="home__wrapper">
                    <CharList/>
                    <aside className="sidebar">
                        <Skeleton/>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Home;