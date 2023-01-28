import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './Photos.module.css';
import {photosRequest} from "../../api";
import {Photo} from "../Photo/Photo";

const Photos = () => {

    const [photos, setPhotos] = useState([]);

    const {albumId} = useParams();

    useEffect(() => {
        photosRequest.getById(albumId).then(({data}) => setPhotos(data))
    }, [albumId]);

    return (
        <div className={css.Photos}>
            {
                !!photos.length && photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export {
    Photos
};
