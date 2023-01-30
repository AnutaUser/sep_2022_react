import React, {useState} from "react";

import css from './UsersPage.module.css';
import {UserForm, Users} from "../../components";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(null);

    return (
        <div className={css.UsersPage}>
            <UserForm setUsers={setUsers} updateUser={updateUser} setUpdateUser={setUpdateUser}/>
            <div className={css.UsersPageHr}></div>
            <Users users={users} setUpdateUser={ setUpdateUser} setUsers={setUsers}/>
        </div>
    );
};

export {
    UsersPage
};
