import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './Photos.module.css';
import {photosActions} from "../../redux";
import {Photo} from "../Photo/Photo";

const Photos = () => {

    const dispatch = useDispatch();
    const {photos} = useSelector(state => state['photos']);

    useEffect(() => {
        dispatch(photosActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.Photos}>
            {!!photos.length && photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {
    Photos
};
