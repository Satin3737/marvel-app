import Banner from "../Banner";
import ComicsList from "../ComicsList";

const ComicsPage = () => {
    return (
        <>
            <Banner/>
            <div className="container">
                <ComicsList/>
            </div>
        </>
    )
}

export default ComicsPage;