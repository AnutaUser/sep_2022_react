import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {faArrowCircleLeft, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import css from './Cars.module.css';
import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, prev, next} = useSelector(state => state['cars']);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(carActions.getAll(({page: query.get('page')})));
    }, [dispatch, query]);

    return (
        <div className={css.CarsComponent}>
            <div>
                <button className={css.CarsComponentButton} disabled={!prev}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} className={css.icon}></FontAwesomeIcon>
                </button>
                <button className={css.CarsComponentButton} disabled={!next} onClick={() => setQuery(next)}>
                    <FontAwesomeIcon icon={faArrowCircleRight} className={css.icon}></FontAwesomeIcon>
                </button>
            </div>

            <div className={css.Cars}>
                {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {
    Cars
};
