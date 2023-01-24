import React from 'react';

const Post = ({post}) => {

    const {id, userId, title} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {Post};
