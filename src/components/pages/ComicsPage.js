import Banner from "../Banner";
import ComicsList from "../ComicsList";
import {Helmet} from "react-helmet";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="List of comics"
                    content="Marvel DB"
                />
                <title>
                    Marvel information portal | Comics page
                </title>
            </Helmet>
            <Banner/>
            <div className="container">
                <ComicsList/>
            </div>
        </>
    )
}

export default ComicsPage;