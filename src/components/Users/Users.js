import React, {useEffect, useState} from 'react';

import './Users.css';
import {User} from "../User/User";
import {userService} from "../../services";
import {UserDetails} from "../UserDetails/UserDetails";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]));
    }, []);


    return (
        <div>
            <div className={'users'}>
                <div className={'block'}>
                    {!!users.length && users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
                </div>
                <div className={'hr'}></div>
                <div className={'block'}>
                    {!!userId && <UserDetails userId={userId} removeUser={setUserId} postId={postId} setPostId={setPostId}/>}
                </div>
            </div>
            {!!postId &&
                <div>
                    <hr/>
                    <Posts userId={userId} setPostId={setPostId}/>
                </div>
            }
            <div>
            </div>
        </div>
    );
};

export {Users};
