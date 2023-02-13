import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../api";

const initialState = {
    access: null,
    refresh: null,
};
const logIn = createAsyncThunk(
    'loginSlice/logIn',
    async (cred, thunkAPI) => {
        try {
            const {data} = await authService.login(cred);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const logOut = createAsyncThunk(
    'loginSlice/logOut',
    async (_, thunkAPI) => {
        try {
            await authService.deleteTokens();
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                const {access, refresh} = action.payload;
                console.log(action.payload)
                state.access = access;
                state.refresh = refresh;
            })
});

const {reducer: loginReducer} = loginSlice;
const loginActions = {logIn, logOut};

export {
    loginSlice,
    loginActions,
    loginReducer
};
