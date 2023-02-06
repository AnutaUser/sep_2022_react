import React from "react";

const Cat = ({cat, dispatch}) => {

    const {catId, name, age} = cat;

    const deleteCat = catId => {
        dispatch({type: 'DELETE_CAT', payload: catId});
    };

    return (
        <div>
            <div>CatId: {catId}</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <button onClick={() => deleteCat(catId)}>Delete {name}</button>
        </div>
    );
};

export {
    Cat
};
