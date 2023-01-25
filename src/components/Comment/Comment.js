import React from 'react';

import {commentsRequest} from '../../api';

const Comment = ({comment, setUpdateComment, setComments}) => {

    const {id, postId, name, email} = comment;

    const deleteComment = async () => {
        await commentsRequest.delete(id);
        const {data} = await commentsRequest.getAll();
        setComments([...data]);
    };

    return (
        <div style={{width: '30vw'}}>
            <div>{id} -- {postId} -- {name} -- {email}</div>

            <button onClick={() => setUpdateComment(comment)}>update</button>
            <button onClick={()=> deleteComment()}>delete</button>
        </div>
    );
};

export {Comment};
