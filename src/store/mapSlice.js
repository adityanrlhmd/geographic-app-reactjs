import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const createMap = createAsyncThunk(
//     "post/createMap",
//     async ({ updatedMapData, navigate }, { rejectWithValue }) => {
//       try {
//         const response = await api.createMap(updatedMapData);
//         navigate("/admin");
//         return response.data;
//       } catch (err) {
//         return rejectWithValue(err.response.data);
//       }
//     }
//   );

export const getMaps = createAsyncThunk('maps/getMaps', async (_, { errorValue }) => {
    try{
        const response = await axios.get('https://server-geographic.herokuapp.com/api/geographic')
        return response;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

export const getMap = createAsyncThunk('map/getMap', async (_id, { errorValue }) => {
    try{
        const response = await axios.get(`https://server-geographic.herokuapp.com/api/geographic${_id}`)
        return response;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

export const deleteMap = createAsyncThunk('delete/deleteMap', async (_id, { errorValue }) => {
    try{
        const response = await axios.delete(`https://server-geographic.herokuapp.com/api/geographic/${_id}`)
        return response.data;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

export const updateMap = createAsyncThunk('update/updateMap', async (update, { errorValue }) => {
    try{
        const {
            _id,
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
            materialLoss3
        } = update
        const response = await axios.put(`https://server-geographic.herokuapp.com/api/geographic/${_id}`, {
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
            materialLoss3
        })
        return response.data;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

export const createMap = createAsyncThunk('post/createMap', async ({ 
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
 }, { errorValue }) => {
    try{
        const response = await axios.post('https://server-geographic.herokuapp.com/api/geographic', {
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
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

// const mapEntity = createEntityAdapter({
//     selectId: (map) => map.id
// })

// export const getYear = createAsyncThunk('year/getYear', async (year, { errorValue }) => {
//     try{
//         const response = await axios.get(`https://server-geographic.herokuapp.com/api/geographic/${year}`)
//         return response;
//     } catch(err){
//         return errorValue(
//             'Opps there seems to be an error'
//         )
//     }
// })

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    maps: [],
    map: [],
    post: [],
    delete: [],
    update: [],
    loading: false,
    body: "",
    mapsState : 'fill',
    mapState : 'fill',
    postState : '',
    deleteState : '',
    updateState : '',
    error : null,
    edit: false,
},
reducers:{},
extraReducers:{
    [getMaps.pending]: (state) => {
        state.statusMaps = 'loading'
    },
    [getMaps.fulfilled]: (state, action) => {
        state.maps = action.payload.data
        state.statusMaps = 'succeeded'
    },
    [getMaps.rejected]: (state, action) =>{
        console.log(action.error.message);
    },
    [getMap.pending]: (state) => {
        state.statusMaps = 'loading'
    },
    [getMap.fulfilled]: (state, action) => {
        state.maps = action.payload.data
        state.statusMaps = 'succeeded'
    },
    [getMap.rejected]: (state, action) =>{
        console.log(action.error.message);
    },
    [createMap.pending]: (state, action) => {
        state.loading = true;
    },
    [createMap.fulfilled]: (state, action) => {
        return {
            ...state,
                post: [action.payload, ...state.maps],
                postState: 'fill',
                loading: false 
        }
    },
    [createMap.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [deleteMap.pending]: (state, action) => {
        state.loading = true;
    },
    [deleteMap.fulfilled]: (state, action) => {
        const currentMaps = state.maps.filter((map) =>
            map._id !== action.payload._id
        );

        return {
            ...state,
                delete: currentMaps,
                deleteState: 'fill',
                loading: false 
        }
    },
    [deleteMap.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [updateMap.pending]: (state, action) => {
        state.loading = true;
    },
    [updateMap.fulfilled]: (state, action) => {
        const updatedMap = state.maps.map((map) =>
            map._id === action.payload._id ? action.payload : map)

        return {
            ...state,
                update: updatedMap,
                updateState: 'fill',
                loading: false 
        }
    },
    [updateMap.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // [getYear.pending]: (state) => {
    //     state.statusYear = 'loading'
    // },
    // [getYear.fulfilled]: (state, action) => {
    //     state.year = action.payload.data
    //     state.statusYear = 'succeeded'
    // },
    // [getYear.rejected]: (state, action) =>{
    //     console.log(action.error.message);
    // },
},
});

// export const { setEdit } = mapSlice.actions;
export default mapSlice.reducer