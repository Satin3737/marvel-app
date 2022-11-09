import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import {ComicsPage, HomePage} from "./pages";
import '../styles/general.scss'
import '../styles/parts/home.scss'

const App = () => {
    return (
        <Router>
            <main className="home">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="comics" element={<ComicsPage/>} />
                </Routes>
                {/*<ComicsSingle/>*/}
                {/*<CharSingle/>*/}
            </main>
        </Router>
    )
}

export default App;