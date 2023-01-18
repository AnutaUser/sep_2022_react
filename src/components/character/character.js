import React from 'react';

import './character.css';

const Character = ({character}) => {

    const {name, status, species, image, episode} = character;

    return (
        <div className={'character'}>
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <img src={image} alt={name}/>
            <div className={'episodes'}>Episode: {
                episode.map(ep => <div><a key={ep.id} href={ep}>{ep}</a></div>
                )
            }
            </div>
        </div>
    );
};

export {Character};
