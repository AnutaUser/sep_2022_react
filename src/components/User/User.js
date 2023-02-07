import React from "react";
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => dispatch(userActions.setSelectedUser(user))}>details</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>apiDetails</button>
            <hr/>
        </div>
    );
};

export {
    User
};
