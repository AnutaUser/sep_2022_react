import React, {useEffect, useState} from "react";

import css from './Posts.module.css';
import {postsRequest} from "../../api";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsRequest.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div className={css.Posts}>
            {
                !!posts.length && posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {
    Posts
};
