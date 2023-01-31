import React, {useContext} from "react";

import {MyContext} from "../../index";
import {Button} from "../../components";

const ContextPage = () => {

    const context = useContext(MyContext);
    context.gender = 'male';
    Object.assign(context, {status: true});
    delete context.gender;

    return (
        <div>
            <div>Name: {context.name}</div>
            <div>Surname: {context.surname}</div>
            <div>Age: {context.age}</div>
            <div>Gender: {context.gender}</div>
            <div>Status: {context.status.toString()}</div>

            <Button click={()=> console.log('click me')}> Click </Button>
        </div>
    );
};

export {
    ContextPage
};
