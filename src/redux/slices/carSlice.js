import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../api";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }

    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const update = createAsyncThunk(
    'carSlice/setCar',
    async ({id, car}, thunkAPI) => {
        try {
            const {data} = await carService.update(id, car);
            console.log(data);
            thunkAPI.dispatch(getAll());
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setSelectedCar: (state, action) => {
            state.carForUpdate = action.payload;
        },

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = action.payload;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loadinf = false;
                state.errors = action.payload;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = action.payload;
            })
            .addCase(update.fulfilled, (state, action) => {
                state.loading = false;
                state.carForUpdate = action.payload;
            })
});

const {reducer: carReducer, actions:{setSelectedCar}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteCar,
    update,
    setSelectedCar
};

export {
    carActions,
    carSlice,
    carReducer
};
