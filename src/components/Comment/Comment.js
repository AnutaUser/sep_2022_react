import React from "react";

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {id, postId, name, body} = comment;

    return (
        <div className={css.Comment}>
            <h3>{id} - {postId} - {name[0].toUpperCase() + name.slice(1)}</h3>
            <div>{body[0].toUpperCase() + body.slice(1)}</div>
        </div>
    );
};

export {
    Comment
};
