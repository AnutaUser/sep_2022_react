import React, {useEffect, useState} from "react";

import css from './Todos.module.css';
import {todosRequest} from "../../api";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosRequest.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div className={css.Todos}>
            {
                !!todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {
    Todos
};
