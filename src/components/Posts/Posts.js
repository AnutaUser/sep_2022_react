import React, {useEffect, useState} from 'react';

import './Posts.css';
import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({postId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(postId) {
            postService.getByUserId(postId).then(({data}) => setPosts(data));
        }
    }, [postId]);

    if (!postId) {
        return [];
    }
    console.log(postId);
    console.log(posts);
    return (
        <div className={'posts'}>
            {!!posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
