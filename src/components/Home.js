import '../styles/app.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";

const Home = () => {
    return (
        <main className="home">
            <Header/>
            <Banner/>
            <CharRandom/>
        </main>
    )
}

export default Home;