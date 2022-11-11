import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import {ComicsPage, HomePage, Page404, SingleComicsPage} from "./pages";
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
                    <Route path="comics/:comicsId" element={<SingleComicsPage/>} />
                    <Route path="*" element={<Page404/>} />
                </Routes>
            </main>
        </Router>
    )
}

export default App;