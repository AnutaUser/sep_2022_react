import React from 'react';

import './simpsons.css';
import {Simpson} from "../simpson/simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://i.etsystatic.com/31309176/r/il/f01c07/3485043292/il_570xN.3485043292_ruqd.jpg',
        },
        {
            id: 2,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
        },
        {
            id: 3,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://fwcdn.pl/cpo/14/33/1433/991_1.4.jpg',
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            image: 'https://static.wikia.nocookie.net/simpsons/images/5/5b/Lisafer.png',
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            image: 'https://www.lifepng.com/wp-content/uploads/2020/11/Maggie-Simpson-png-hd.png',
        },
    ];

    return (
        <div className={'simpsons'}>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};
