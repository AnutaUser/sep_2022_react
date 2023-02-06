const userActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID',
};

const userActions = {
    ADD: (item) => ({type: userActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.DELETE_BY_ID, payload: id})
};

const initialUsers = () => [];

const myUserReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.ADD:
            const [last] = state.slice(-1);
            const id = !!last ? last.id + 1 : 1;
            return [...state, {id, ...action.payload}];
        case userActionTypes.DELETE_BY_ID:
            const index = state.findIndex(user => user.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
};

export {
    myUserReducer,
    initialUsers,
    userActions
};
