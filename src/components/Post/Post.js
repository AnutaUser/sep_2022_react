import React from 'react';

import './Post.css';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={'post'}>
            <p>UserId: {userId}</p>
            <p>Iid: {id}</p>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};
