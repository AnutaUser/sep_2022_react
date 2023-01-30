import React from "react";

import css from './User.module.css';

const User = ({user, setUpdateUser, setUsers}) => {

    const {id, name, surname, age} = user;

    const deleteUser = () => {
        setUsers(prev => {
            const index = prev.findIndex(value => value.id === id);
            prev.splice(index, 1);
            return [...prev];
        });

    };

    return (
        <div className={css.User}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Ae: {age}</div>
            <button onClick={() => setUpdateUser(user)}>update</button>
            <button onClick={() => deleteUser()}>delete</button>
        </div>
    );
};

export {
    User
};
