import React, {useEffect, useState} from 'react';

import './Users.css';
import {User} from "../User/User";
import {userService} from "../../services";
import {UserDetails} from "../UserDetails/UserDetails";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetailsId, setUserDetailsId] = useState(null);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]));
    }, []);


    return (
        <div>
            <div className={'users'}>
                <div className={'block'}>
                    {!!users.length && users.map(user => <User key={user.id} user={user} setUserDetailsId={setUserDetailsId}/>)}
                </div>
                <div className={'hr'}></div>
                <div className={'block'}>
                    {!!userDetailsId && <UserDetails userDetailsId={userDetailsId} setUserDetailsId={setUserDetailsId} postId={postId} setPostId={setPostId}/>}
                </div>
            </div>

            {!!postId &&
                <div>
                    <hr/>
                    <Posts postId={postId}/>
                </div>
            }
            <div>
            </div>
        </div>
    );
};

export {Users};
