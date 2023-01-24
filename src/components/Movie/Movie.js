import React from 'react';

const Movie = ({movie}) => {

    const {
        id,
        backdrop_path,
        budget,
        homepage,
        title,
        popularity,
        poster_path,
        release_date,
    } = movie;

    return (
        <div>
            {id}
            <div>backdrop_path: {backdrop_path}</div>
            <div>Budget: {budget}</div>
            <div>Homepage: {homepage}</div>
            <div>Title: {title}</div>
            <div>popularity: {popularity}</div>
            <img src={backdrop_path} alt={title}/>
            <div>release_date: {release_date}</div>
            <hr/>

        </div>
    );
};

export {Movie};
