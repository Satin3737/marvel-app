import Skeleton from "../components/Skeleton";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return null;
        case 'skeleton':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'error':
            return <ErrorMessage/>;
        case 'confirmed':
            return <Component data={data}/>;
        default:
            throw new Error('Unexpected precess state');
    }
}

export default setContent;