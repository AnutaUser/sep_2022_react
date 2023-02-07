import React from "react";
import {useSelector} from "react-redux";

const UserDetails = () => {

    const {selectedUser} = useSelector(state => state.users);

    return (
        <div>
            {!!selectedUser && <h1>User details</h1>}
            {!!selectedUser && selectedUser.name}
        </div>
    );
};

export {
    UserDetails
};
