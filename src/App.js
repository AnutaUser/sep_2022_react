import React, {useReducer} from "react";

const App = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc1':
                return {...state, count1: state.count1 + 1};
            case 'dec1':
                return {...state, count1: state.count1 - 1};
            case 'inc2':
                return {...state, count2: state.count2 + 1};
            case 'dec2':
                return {...state, count2: state.count2 - 1};
            case 'res':
                return {count1: 0, count2: 0};
            default: {
                return state;
            }
        }
    };

    const innitValue = () => (
        {count1: 0, count2: 0}
    );

    const [state, dispatch] = useReducer(reducer, null, innitValue);

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', height: '40vh', alignItems: 'flex-end'}}>
                <div>
                    <h1>Count 1: {state.count1}</h1>
                    <button onClick={() => dispatch({type: 'inc1'})}>increment</button>
                    <button onClick={() => dispatch({type: 'dec1'})}>decrement</button>
                </div>
                <div>
                    <h1>Count 2: {state.count2}</h1>
                    <button onClick={() => dispatch({type: 'inc2'})}>increment</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>decrement</button>
                </div>
            </div>
            <hr/>
            <button  onClick={() => dispatch({type: 'res'})} style={{marginLeft: '48%'}}>reset all</button>
        </div>
    );
};

export {App};
