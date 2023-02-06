import React, {useReducer} from "react";
import {useForm} from "react-hook-form";

import css from './CatsDogsPage.module.css';
import {Cats, Dogs} from "../../components";

const CatsDogsPage = () => {

    const {register, reset, handleSubmit} = useForm();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_CAT':
                const [lastCat] = state.cats.slice(-1);
                const catId = !!lastCat ? lastCat.catId + 1 : 1;
                return {
                    ...state, cats: [...state.cats, {catId, name: action.payload1, age: action.payload2}]
                };
            case 'DELETE_CAT':
                const catIndex = state.cats.findIndex(cat => cat.catId === action.payload);
                state.cats.splice(catIndex, 1);
                return {...state};
            case 'ADD_DOG':
                const [lastDog] = state.dogs.slice(-1);
                const dogId = !!lastDog ? lastDog.dogId + 1 : 1;
                return {
                    ...state, dogs: [...state.dogs, {dogId, name: action.namePayload, age: action.agePayload}]
                };
            case 'DELETE_DOG':
                const dogIndex = state.dogs.findIndex(dog => dog.dogId === action.payload);
                state.dogs.splice(dogIndex, 1);
                return {...state};
            default:
                return {...state};
        }

    };

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const addCat = (newCat) => {
        dispatch({type: 'ADD_CAT', payload1: newCat.catName, payload2: newCat.catAge});
        reset();
    };

    const addDog = (newDog) => {
        dispatch({type: 'ADD_DOG', namePayload: newDog.dogName, agePayload: newDog.dogAge});
        reset()
    };

    return (
        <div className={css.CatsDogsPage}>
            <div className={css.Forms}>
                <form onSubmit={handleSubmit(addCat)}>
                    <div className={css.Input}><input type="text" placeholder={'Cat name'} {...register('catName')}/>
                    </div>
                    <div className={css.Input}><input type="number" placeholder={'Cat age'} {...register('catAge')}/>
                    </div>
                    <button className={css.Button}>save</button>
                </form>

                <form onSubmit={handleSubmit(addDog)}>
                    <div className={css.Input}><input type="text" placeholder={'Dog name'} {...register('dogName')}/>
                    </div>
                    <div className={css.Input}><input type="number" placeholder={'Dog age'} {...register('dogAge')}/>
                    </div>
                    <button className={css.Button}>save</button>
                </form>

            </div>

            <div className={css.Hr}></div>

            <div className={css.Pets}>
                <Cats cats={state.cats} dispatch={dispatch}/>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {
    CatsDogsPage
};
