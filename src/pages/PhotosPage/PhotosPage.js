import React from "react";

import css from './PhotosPage.module.css';
import {PhotoDetails, Photos} from "../../components";
import {useSelector} from "react-redux";

const PhotosPage = () => {

    const {errors, loading} = useSelector(state => state['photos']);

    return (
        <div className={css.PhotosPage}>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading ......... </h1>}
            <Photos/>
            <PhotoDetails/>
        </div>
    );
};

export {
    PhotosPage
};
