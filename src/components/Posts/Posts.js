import React, {useEffect, useState} from 'react';

import {postService} from '../../services';
import {Post} from '../Post/Post';

const Posts = ({postId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (postId) {
            postService.getByUserId(postId).then(({data}) => setPosts(data))
        }
    }, [postId]);

    return (
        <div>
            <hr style={{height: '10px', background: 'deepskyblue'}}/>
            {!!posts.length && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
