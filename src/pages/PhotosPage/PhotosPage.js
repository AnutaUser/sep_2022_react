import React from "react";

import css from './PhotosPage.module.css';
import {PhotoDetails, Photos} from "../../components";

const PhotosPage = () => {

    return (
        <div className={css.PhotosPage}>
            <Photos/>
            <PhotoDetails/>
        </div>
    );
};

export {
    PhotosPage
};
