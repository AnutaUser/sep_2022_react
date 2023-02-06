import React from "react";

import {Cat} from "../Cat/Cat";

const Cats = ({cats, dispatch}) => {

    return (
        <div>
            <h1>Cats list</h1>
            {
                !!cats.length &&
                cats.map(cat => <Cat key={cat.catId} cat={cat} dispatch={dispatch}/>)
            }
        </div>
    );
};

export {
    Cats
};
