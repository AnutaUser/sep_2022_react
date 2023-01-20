import React, {useEffect, useState} from 'react';

import './Posts.css';
import {postService} from "../../api";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className={'posts, block'}>
                {
                    !!posts.length && posts.map(post => <Post key={post.id} post={post} setPostId={setPostId}/>)
                }
            </div>
            <div style={{width: '.5vw', background: 'darkslateblue'}}></div>
            <div className={'block'}>
                {
                    !!postId && <PostDetails postId={postId} setPostId={setPostId}/>
                }
            </div>
        </div>
    );
};

export {Posts};
