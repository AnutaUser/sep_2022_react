import React from 'react';
import './simpsonsComponent.css';

export const SimpsonsComponent = (props) => {

    const {name, pic} = props;

    return (
        <div className={'simpsonCard'}>
            <h2>{name}</h2>
            <img src={pic} alt={name}/>
        </div>
    );
};
