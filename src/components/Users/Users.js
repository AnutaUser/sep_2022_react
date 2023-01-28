import React, {useEffect, useState} from "react";

import {usersRequest} from "../../api";
import {User} from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersRequest.getAll().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div>
            {
                !!users.length && users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {
    Users
};
