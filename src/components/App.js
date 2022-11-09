import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import {ComicsPage, HomePage} from "./pages";
import '../styles/general.scss'
import '../styles/parts/home.scss'

const App = () => {
    return (
        <Router>
            <main className="home">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/comics">
                        <ComicsPage/>
                    </Route>
                </Switch>
                {/*<ComicsSingle/>*/}
                {/*<CharSingle/>*/}
            </main>
        </Router>
    )
}

export default App;