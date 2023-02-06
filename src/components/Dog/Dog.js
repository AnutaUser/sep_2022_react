import React from "react";

const Dog = ({dog, dispatch}) => {

    const {dogId, name, age} = dog;

    const deleteDog = dogId => {
        dispatch({type:'DELETE_DOG', payload: dogId})
    };

    return (
        <div>
            <div>DogId: {dogId}</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <button onClick={()=>deleteDog(dogId)}> Delete {name}</button>
        </div>
    );
};

export {
    Dog
};
