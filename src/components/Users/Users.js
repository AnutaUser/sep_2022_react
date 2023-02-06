import React from "react";

import {useAppReducer} from "../../hooks";
import {User} from "../User/User";

const Users = () => {

    const [users] = useAppReducer(reducer => reducer.userReducer);

    return (
        <div>
            <h1>Users List</h1>
            {
                !!users.length && users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {
    Users
};
