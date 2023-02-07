import React from "react";

import css from './Photo.module.css';
import {useDispatch} from "react-redux";
import {photosActions} from "../../redux";

const Photo = ({photo}) => {

    const {id, thumbnailUrl, title} = photo;

    const dispatch = useDispatch();

    return (
        <div className={css.Photo}>
            <button onClick={() => dispatch(photosActions.getById({id}))}>
                <div>ID: {id}</div>
                <img src={thumbnailUrl} alt={title}/>
            </button>
        </div>
    );
};

export {
    Photo
};
