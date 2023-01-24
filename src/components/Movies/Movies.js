import React, {useEffect, useState} from 'react';

import {movieService} from '../../services';
import {Movie} from '../Movie/Movie';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results))
    });

    return (
        <div>
            {
                !!movies.length && movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {Movies};
