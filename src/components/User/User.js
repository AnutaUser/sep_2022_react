import React from 'react';

import {usersRequests} from '../../api';

const User = ({user, setUpdateUser, setUsers}) => {

    const {id, name, username} = user;

    const deleteUser = async () => {
        await usersRequests.delete(id);
        console.log(id);
        const {data} = await usersRequests.getAll();
        setUsers([...data]);
    };

    return (
        <div>
            <div>{id} -- {name} -- {username}</div>

            <button onClick={() => setUpdateUser(user)}>update</button>
            <button onClick={()=> deleteUser()}>delete</button>
        </div>
    );
};

export {User};
