import React, {useEffect, useState} from 'react';

import {postService} from "../../api";

const PostDetails = ({postId, setPostId}) => {

    const [postDetail, setPostDetail] = useState(null);

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(value => setPostDetail(value));

        }
    }, [postId]);

    if (!postDetail) {
        return null;
    }

    const {userId, id, title, body} = postDetail;

    return (
        <div>
            <h2>userId: {userId}</h2>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
            <p>body: {body}</p>
            <button onClick={()=> {setPostId(null)}}> Remove </button>
        </div>
    );
};

export {PostDetails};
