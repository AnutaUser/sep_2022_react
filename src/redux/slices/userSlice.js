import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../api";

const initialState = {
    users: [],
    selectedUser: null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload;
        // },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {getAll, getById, setSelectedUser};

export {
    userReducer,
    userActions,
    userSlice,
};
