import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../api";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[];
    carForUpdate: ICar | null;
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const create = createAsyncThunk<ICar, { car:ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const updateCar = createAsyncThunk<ICar, {id:string, updCar: ICar}>(
    'carSlice/updateCar',
    async ({id, updCar}, {rejectWithValue, dispatch}) =>{
        try {
            const {data} = await carService.updateById(id, updCar);
            await dispatch(getAll());
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const deleteCar = createAsyncThunk<void, { id: string; }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id);
            await dispatch(getAll());
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setSelectedCar: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                state.carForUpdate = action.payload;
            })
});

const {reducer: carReducer, actions:{setSelectedCar}} = carSlice;

const carActions = {
    getAll,
    create,
    setSelectedCar,
    updateCar,
    deleteCar
};

export {
    carActions,
    carReducer
};
