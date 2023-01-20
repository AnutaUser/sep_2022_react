import React from 'react';

const Post = ({post, setPostId}) => {

    const {id, title} = post;

    return (
        <div>
            {id} -- {title[0].toUpperCase() + title.slice(1)}
            <button onClick={() => setPostId(id)}> Details </button>
        </div>
    );
};

export {Post};
