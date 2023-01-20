import React, {useEffect, useState} from 'react';

import {userService} from "../../services";

const UserDetails = ({userId, removeUser, postId, setPostId}) => {

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {

        if (userId) {
            userService.getById(userId).then(value => value.data).then(value => setUserDetails(value));
        }
    }, [userId]);

    if (!userDetails) {
        return null
    }

    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = userDetails;

    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <div>Email: {email}</div>
            <div>Address:
                <div>Street: {street}</div>
                <div>Suite: {suite}</div>
                <div>City: {city}</div>
                <div>Zipcode: {zipcode}</div>
                <div>Geo:
                    <div>Lat: {lat}</div>
                    <div>Lng: {lng}</div>
                </div>
            </div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>Company:
                <div>Name: {companyName}</div>
                <div>CatchPhrase: {catchPhrase}</div>
                <div>bs: {bs}</div>
            </div>
            <button onClick={() => removeUser(null)}>Remove</button>
            <button onClick={() => setPostId(id)}>User posts</button>
        </div>
    );
};

export {UserDetails};
