import React from 'react';

import {Comment} from '../Comment/Comment';

const Comments = ({comments, setUpdateComment, setComments}) => {

    return (
        <div>
            {!!comments && comments.map(comment => <Comment key={comment.id} comment={comment} setUpdateComment={setUpdateComment} setComments={setComments}/>)}
        </div>
    );
};

export {Comments};
