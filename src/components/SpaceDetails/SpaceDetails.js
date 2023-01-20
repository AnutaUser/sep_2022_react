import React from 'react';

const SpaceDetails = ({spaceDet, setSpaceDet}) => {
    const {
        flight_number,
        mission_name,
        launch_year,
        details,
        launch_date_unix,
        launch_date_local
    } = spaceDet;


    return (
        <div>
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div>details: {details}</div>
            <div>launch_date_unix: {launch_date_unix}</div>
            <div>launch_date_local: {launch_date_local}</div>
            <button onClick={() => { setSpaceDet(null)}}> Remove </button>
        </div>
    );
};

export {SpaceDetails};
