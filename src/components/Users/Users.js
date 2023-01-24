import React, {useEffect, useState} from 'react';

import {userService} from '../../services';
import {User} from '../User/User';
import {UserDetails} from "../UserDetails/UserDetails";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetailsId, setUserDetailsId] = useState(null);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    {
                    !!users.length && users.map(user => <User key={user.id} user={user}
                                                              setUserDetailsId={setUserDetailsId}/>)
                }
                </div>

                <div style={{width: '1%', background: 'deepskyblue'}}></div>

                <div>
                    {!!userDetailsId && <UserDetails userDetailsId={userDetailsId} setPostId={setPostId} postId={postId}/>}
                </div>
            </div>

            <div>
                {
                    !!postId && <Posts postId={postId}/>
                }
            </div>

        </div>
    );
};

export {Users};
