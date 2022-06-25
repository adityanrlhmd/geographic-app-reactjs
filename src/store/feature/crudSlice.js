import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:5000/api/';

const initialState = {
    crud: [],
    addMapStatus: "",
    addMapError: "",
}

export const crudsAdd = createAsyncThunk('cruds/crudsAdd', async ({
    year,
    latde,
    longtde,
    street,
    street2,
    street3,
    text,
    text2,
    text3,
    date,
    date2,
    date3,
    die,
    die2,
    die3,
    seriousInj,
    seriousInj2,
    seriousInj3,
    minorInj,
    minorInj2,
    minorInj3,
    materialLoss,
    materialLoss2,
    materialLoss3,
}, { rejectWithValue }) => {
    try{
        const response = await axios.post(baseURL + 'geographic', {
            year,
            latde,
            longtde,
            street,
            street2,
            street3,
            text,
            text2,
            text3,
            date,
            date2,
            date3,
            die,
            die2,
            die3,
            seriousInj,
            seriousInj2,
            seriousInj3,
            minorInj,
            minorInj2,
            minorInj3,
            materialLoss,
            materialLoss2,
            materialLoss3,
        })
        return response.data;
    } catch(err){
        return rejectWithValue(
            err.response.data
        )
    }
})

const crudSlice = createSlice ({
    name: 'cruds',
    initialState,
    reducers:{},
    extraReducers: {
        [crudsAdd.pending]: (state, action) => {
            return {
                ...state,
                addMapStatus: "pending",
                addMapError: "",   
            }
        },
        [crudsAdd.fulfilled]: (state, action) => {
            return {
                ...state,
                crud: [action.payload, ...state.cruds],
                addMapStatus: "success",
                addMapError: "",   
            }
        },
        [crudsAdd.rejected]: (state, action) => {
            return {
                ...state,
                addMapStatus: "rejected",
                addMapError: action.payload,   
            }
        }
    }
})

export default crudSlice.reducer;