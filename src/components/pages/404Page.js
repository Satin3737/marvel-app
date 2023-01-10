import ErrorMessage from "../ErrorMessage";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Page404 = () => {
    return (
        <div className="container container_error">
            <Helmet>
                <meta
                    name="Page not found"
                    content="Marvel DB"
                />
                <title>
                    {'Marvel information portal | 404'}
                </title>
            </Helmet>
            <ErrorMessage/>
            <Link to="/" className="button button_error">
                Back to home page
            </Link>
        </div>
    )
}

export default Page404;