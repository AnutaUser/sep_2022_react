import React from 'react';

const Space = ({space, setSpaceDet}) => {
    const {flight_number, mission_name, launch_year, } = space;

    return (
        <div style={{borderBottom: '1px solid black', width: '50%'}}>
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <button onClick={()=> {setSpaceDet(space)}}> Details </button>
        </div>
    );
};

export {Space};
