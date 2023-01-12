import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";
import '../styles/general.scss';
import '../styles/parts/home.scss';

const Page404 = lazy(() => import('../components/pages/404Page'));
const HomePage = lazy(() => import('../components/pages/HomePage'));
const ComicsPage = lazy(() => import('../components/pages/ComicsPage'));
const SinglePage = lazy(() => import('../components/pages/SinglePage'));
const CharLayout = lazy(() => import('../components/pages/single/CharLayout'));
const ComicsLayout = lazy(() => import('../components/pages/single/ComicsLayout'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="overlay"><Spinner/></div>}>
                <main className="page">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="characters/:dataId" element={<SinglePage Component={CharLayout} dataType="char"/>} />
                        <Route path="comics" element={<ComicsPage/>} />
                        <Route path="comics/:dataId" element={<SinglePage Component={ComicsLayout} dataType="comics"/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </main>
            </Suspense>
        </Router>
    )
}

export default App;