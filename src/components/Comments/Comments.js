import React, {useEffect, useState} from "react";

import css from './Comments.module.css';
import {commentsRequest} from "../../api";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div className={css.Comments}>
            {
                !!comments.length && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {
    Comments
};
