import React from 'react';

const User = ({user, setUserDetailsId}) => {

    const {id, name} = user;

    return (
        <div>
            {id} -- {name}
            <button onClick={()=> setUserDetailsId(id)}> Details </button>
        </div>
    );
};

export {User};
