import '../styles/general.scss'
import '../styles/parts/home.scss'
import Header from "./Header";
import Banner from "./Banner";
import CharRandom from "./CharRandom";
import CharList from "./CharList";
import CharInfo from "./CharInfo";
import CharForm from "./CharForm";
import CharSingle from "./CharSingle";
import ComicsSingle from "./ComicsSingle";
import ComicsList from "./ComicsList";
import {Component} from "react";

class Home extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {
        return (
            <main className="home">
                <Header/>
                <Banner/>
                <CharRandom/>
                <div className="container">
                    <div className="home__wrapper">
                        <div className="home__content">
                            <CharList onCharSelected={this.onCharSelected}/>
                        </div>
                        <aside className="home__sidebar">
                            <CharInfo charId={this.state.selectedChar}/>
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
}

export default Home;