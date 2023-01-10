import '../../styles/general.scss'
import '../../styles/parts/comicsSingle.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import Banner from "../Banner";
import setContent from "../../utils/setContent";

const SinglePage = ({Component, dataType}) => {
    const {dataId} = useParams();
    const [data, setData] = useState(null);
    const {clearError, getSingleCharacter, getSingleComics, process, setProcess} = useMarvelService();

    const updateData = () => {
        clearError();
        if (dataType === 'char') {
            getSingleCharacter(dataId)
                .then(setData)
                .then(() => setProcess('confirmed'));
        }
        if (dataType === 'comics') {
            getSingleComics(dataId)
                .then(setData)
                .then(() => setProcess('confirmed'));
        }
    }

    useEffect(() => {
        updateData();
    }, [dataId]);

    return (
        <>
            <Banner/>
            <div className="container">
                {setContent(process, Component, data)}
            </div>
        </>
    )
}

export default SinglePage;