import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {usersRequest} from "../../api";
import {UserDetailsSingle} from "../UserDetailsSingle/UserDetailsSingle";

const UserDetails = () => {

    const [userDetails, setUserDetails] = useState(null);

    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            usersRequest.getById(userId).then(({data}) => setUserDetails(data))
        }
    }, [userId]);

    return (
        <div>
            {
                !!userDetails && <UserDetailsSingle userDetails={userDetails}/>
            }
        </div>
    );

};

export {
    UserDetails
};
