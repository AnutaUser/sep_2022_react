import React from "react";

import css from './Todo.module.css';

const Todo = ({todo}) => {

    const {id, title, userId, completed} = todo;

    return (
        <div className={css.Todo}>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <h3>Title: {title[0].toUpperCase() + title.slice(1)}</h3>
            <div>Completed: {completed.toString()} :)</div>
        </div>
    );
};

export {
    Todo
};
