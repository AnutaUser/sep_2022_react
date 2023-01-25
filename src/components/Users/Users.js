import React from 'react';

import {User} from '../User/User';

const Users = ({users, setUpdateUser, setUsers}) => {

    return (
        <div style={{textAlign:'center'}}>
            {
                !!users && users.map(user => <User key={user.id} user={user} setUpdateUser={setUpdateUser} setUsers={setUsers}/>)
            }
        </div>
    );
};

export {Users};
