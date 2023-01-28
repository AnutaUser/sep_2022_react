import React from "react";
import {useNavigate} from "react-router-dom";

const UserDetailsSingle = ({userDetails}) => {

    const navigate = useNavigate();

    const {id, name, username, email, phone,website} = userDetails;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            {/*<Link to={'postsByUserId'}>*/}
                <button onClick={() => navigate('postsByUserId')}>Posts of current users</button>
            {/*</Link>*/}
        </div>
    );
};

export {
    UserDetailsSingle
};
