import React from "react";

const Photo = ({photo}) => {

    const {title, thumbnailUrl} = photo;
    return (
        <div>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export {
    Photo
};
