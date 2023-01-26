import React from "react";

import css from './Album.module.css';

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={css.Album}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <h3>title: {title}</h3>
        </div>
    );
};

export {
    Album
};
