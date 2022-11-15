import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";
import '../styles/general.scss';
import '../styles/parts/home.scss';
// dynamic import
const Page404 = lazy(() => import('../components/pages/404Page'));
const HomePage = lazy(() => import('../components/pages/HomePage'));
const ComicsPage = lazy(() => import('../components/pages/ComicsPage'));
const SingleComicsPage = lazy(() => import('../components/pages/SingleComicsPage'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="overlay"><Spinner/></div>}>
                <main className="home">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="comics" element={<ComicsPage/>} />
                        <Route path="comics/:comicsId" element={<SingleComicsPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </main>
            </Suspense>
        </Router>
    )
}

export default App;