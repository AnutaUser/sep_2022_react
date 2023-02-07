import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {photoService} from "../../api";

const initialState = {
    photos: [],
    photo: null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'photoSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await photoService.getAll();
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'photoSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await photoService.getById(id);
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.photos = action.payload;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.photo = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
});

const {reducer: photoReducer} = photoSlice;

const photosActions = {getAll, getById};

export {
    photoSlice,
    photosActions,
    photoReducer
};
