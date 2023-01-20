import React from 'react';

import './User.css';

const User = ({user, setUserId}) => {

    const {id, name} = user;

    return (
        <div>
            <h2 className={'user'}>
                {id} -- {name}
                <button onClick={() => setUserId(id)}>Details</button>
            </h2>
        </div>
    );
};

export {User};
