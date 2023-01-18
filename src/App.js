import React from 'react';

import './App.css';
import {SimpsonsComponent} from "./components/simpsonsComponent/simpsonsComponent";

const App = () => {
    return (
        <div className={'App'}>
            <SimpsonsComponent
            name={'Bart Simpson'}
            pic={'https://i.etsystatic.com/31309176/r/il/f01c07/3485043292/il_570xN.3485043292_ruqd.jpg'}
            />
            <SimpsonsComponent
            name={'Homer Simpson'}
            pic={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
            />
            <SimpsonsComponent
            name={'Marge Simpson'}
            pic={'https://fwcdn.pl/cpo/14/33/1433/991_1.4.jpg'}
            />
            <SimpsonsComponent
            name={'Lisa Simpson'}
            pic={'https://static.wikia.nocookie.net/simpsons/images/5/5b/Lisafer.png'}
            />
            <SimpsonsComponent
            name={'Maggie Simpson'}
            pic={'https://www.lifepng.com/wp-content/uploads/2020/11/Maggie-Simpson-png-hd.png'}
            />

        </div>
    );
};

export {App};
