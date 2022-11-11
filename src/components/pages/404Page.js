import ErrorMessage from "../ErrorMessage";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div className="container container_error">
            <ErrorMessage/>
            <Link to="/" className="button button_error">
                Back to home page
            </Link>
        </div>
    )
}

export default Page404;