import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './Comments.module.css';
import {commentsRequest} from "../../api";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    const {postId} = useParams();
    console.log(postId);

    useEffect(() => {
        if (postId) {
            commentsRequest.getByPostId(postId).then(({data}) => setComments(data));
        }
    }, [postId]);

    return (
        <div className={css.Comments}>
            {
                !!comments.length && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>

    )
        ;
};

export {
    Comments
};
