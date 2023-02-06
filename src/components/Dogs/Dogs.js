import React from "react";

import {Dog} from "../Dog/Dog";

const Dogs = ({dogs, dispatch}) => {

    return (
        <div>
            <h1>Dogs list</h1>
            {
                !!dogs.length && dogs.map(dog => <Dog key={dog.dogId} dog={dog} dispatch={dispatch}/>)
            }
        </div>
    );
};

export {
    Dogs
};
