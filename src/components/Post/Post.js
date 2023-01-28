import React from "react";
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate();

    return (
        <h3>
            {id} -  {title } -
            <button onClick={() => navigate(id.toString())}> Comments of current post </button>
        </h3>
    );
};

export {
    Post
};
