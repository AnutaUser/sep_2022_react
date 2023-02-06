import React from "react";
import {useAppReducer} from "../../hooks";
import {userActions} from "../../reducers";

const User = ({user}) => {

    const {id, name, surname, age, status} = user;

    const [, dispatch] = useAppReducer(value => value.userReducer);

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <div>status: {status.toString()}</div>
            <button onClick={() => dispatch({type: userActions.DELETE_BY_ID, id})}>delete</button>
        </div>
    );
};

export {
    User
};
