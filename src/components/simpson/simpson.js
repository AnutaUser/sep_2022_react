import React from 'react';

import './simpson.css';

const Simpson = ({simpson}) => {

    const {name, image, surname} = simpson;

    return (
        <div className={'simpsonCard'}>
            <h2>{name} {surname}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};
