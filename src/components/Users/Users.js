import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../api";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div>
            <h1>Users list!</h1>
            {!!users.length && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};
