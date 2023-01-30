import React from "react";

import css from './Users.module.css';
import {User} from "../User/User";

const Users = ({users, setUpdateUser, setUsers}) => {


    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user} setUsers={setUsers} setUpdateUser={setUpdateUser}/>)}
        </div>
    );
};

export {
    Users
};
