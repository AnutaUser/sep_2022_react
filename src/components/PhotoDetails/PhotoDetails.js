import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {photosActions} from "../../redux";

const PhotoDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const {photo, errors, loading} = useSelector(state => state['photos']);

    useEffect(() => {
        dispatch(photosActions.getById(id));
    }, [id, dispatch]);

    return (
        <div>
            {
                !!photo &&
                <div>
                    {errors && JSON.stringify(errors)}
                    {loading && <h1>Loading ......... </h1>}
                    {photo.title[0].toUpperCase() + photo.title.slice(1)}
                    <img src={photo.url} alt={photo.title}/>
                </div>
            }
        </div>
    );
};

export {
    PhotoDetails
};
