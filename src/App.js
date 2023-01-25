import React, {useEffect, useState} from 'react';

import {CommentForm, Comments, UserForm, Users} from './components';
import {commentsRequest, usersRequests} from './api';

const App = () => {

    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [updateUser, setUpdateUser] = useState(null);
    const [updateComment, setUpdateComment] = useState(null);

    useEffect(() => {
        usersRequests.getAll().then(({data}) => setUsers(data));
    }, []);

    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments(data));
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'center', height:'100vh'}}>
            <div>
                <UserForm setUsers={setUsers} updateUser={updateUser}/>
                <hr/>
                <Users users={users} setUpdateUser={setUpdateUser} setUsers={setUsers}/>
            </div>

            <div style={{width: '5px', background: 'plum'}}></div>

            <div>
                <CommentForm setComments={setComments} updateComment={updateComment}/>
                <hr/>
                <Comments comments={comments} setUpdateComment={setUpdateComment} setComments={setComments}/>
            </div>
        </div>
    );
};

export {App};
