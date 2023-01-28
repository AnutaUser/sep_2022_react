import React, {useEffect, useState} from "react";

import css from './Albums.module.css';
import {albumsRequest} from "../../api";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsRequest.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div className={css.Albums}>
            {
                !!albums.length && albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {
    Albums
};
