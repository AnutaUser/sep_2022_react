import React from "react";
import {NavLink} from "react-router-dom";

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {postId, id, name} = comment;

    return (
        <div className={css.Comment}>

            <NavLink to={postId.toString()}>
                <div>PostId: {postId}</div>
                <div>Id: {id}</div>
                <h3>Name: {name}</h3>
            </NavLink>

        </div>
    );
};

export {
    Comment
};
