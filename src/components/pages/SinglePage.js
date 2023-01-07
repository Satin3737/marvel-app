import '../../styles/general.scss'
import '../../styles/parts/comicsSingle.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import Banner from "../Banner";

const SinglePage = ({Component, dataType}) => {
    const {dataId} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, clearError, getSingleCharacter, getSingleComics} = useMarvelService();

    const updateData = () => {
        clearError();
        if (dataType === 'char') {
            getSingleCharacter(dataId)
                .then(setData);
        }
        if (dataType === 'comics') {
            getSingleComics(dataId)
                .then(setData);
        }
    }

    useEffect(() => {
        updateData();
    }, [dataId]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
        <>
            <Banner/>
            <div className="container">
                {spinner || errorMessage || content}
            </div>
        </>
    )
}

export default SinglePage;