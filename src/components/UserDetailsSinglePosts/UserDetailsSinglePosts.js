import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsRequest} from "../../api";
import {UserDetailsSinglePost} from "../UserDetailsSinglePost/UserDetailsSinglePost";

const UserDetailsSinglePosts = () => {

    const [userPosts, setUserPosts] = useState([]);

    const {userId} = useParams();

    useEffect(() => {
        if (!!userId) {
            postsRequest.getByUserId(userId).then(({data})=> setUserPosts(data))
        }

    }, [userId]);

    return (
        <div>
            <hr/>
            {
                !!userPosts.length && userPosts.map(userPost => <UserDetailsSinglePost key={userPost.id} userPost={userPost}/>)
            }
        </div>
    );
};

export {
    UserDetailsSinglePosts
};
