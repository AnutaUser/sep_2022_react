import React from "react";
import {useNavigate} from "react-router-dom";

const Album = ({album}) => {

    const {userId, id, title} = album;

    const navigate = useNavigate();

    return (
        <h3>
            {id} - {userId} - {title[0].toUpperCase() + title.slice(1)} -
            <button onClick={() => navigate(id.toString())}>photos</button>
        </h3>
    );
};

export {
    Album
};
