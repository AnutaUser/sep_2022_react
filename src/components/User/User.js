import React from "react";
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <h3>
            {id} - {name} - {username}
            <Link to={id.toString()}>details</Link>
        </h3>
    );
};

export {
    User
};
