import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const setContentList = (process, Component, newItemsLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemsLoading ? <Component/> : <Spinner/>;
        case 'error':
            return <ErrorMessage/>;
        case 'confirmed':
            return <Component/>;
        default:
            throw new Error('Unexpected precess state');
    }
}

export default setContentList;