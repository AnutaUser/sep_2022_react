import React from "react";

const UserDetailsSinglePost = ({userPost}) => {

    const {id, userId, title} = userPost;

    return (
        <div>
            {id} - {userId} - {title}
        </div>
    );
};

export {
    UserDetailsSinglePost
};
