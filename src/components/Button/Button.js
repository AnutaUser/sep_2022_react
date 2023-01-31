import React from "react";

import css from './Button.module.css';

const Button = ({children, click, ...props}) => {

    console.log("children:", children);
    console.log("click:", click);
    console.log("props:", props);
    return (
        <div className={css.Button} onClick={click} {...props} style={{borderRadius:'8px'}}>
            {children}
        </div>
    );
};

export {
    Button
};
