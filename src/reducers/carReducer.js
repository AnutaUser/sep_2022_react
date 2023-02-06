const carActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
};

const carActions = {
    ADD: (car) => ({type: carActionTypes.ADD, payload: car}),
    DELETE_BY_ID: (id) => ({type: carActionTypes.DELETE_BY_ID, payload: id}),

};

const carsInnit = () => [];

const MyCarReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.ADD:
            const [last] = state.slice(-1);
            const id = !!last ? last.id + 1 : 1;
            return [...state, {id, ...action.payload}];
        case carActionTypes.DELETE_BY_ID:
            const index = state.findIndex(car => car.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
};

export {
    MyCarReducer,
    carActions,
    carsInnit
};
