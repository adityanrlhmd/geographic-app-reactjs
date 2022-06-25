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
        const response = await axios.get('http://localhost:5000/api/geographic')
        return response;
    } catch(err){
        return errorValue(
            'Opps there seems to be an error'
        )
    }
})

// export const createPost = createAsyncThunk(
//     "post/createPost",
//     async ({ values }) => {
//       return fetch(`http://localhost:5000/api/geographic`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//             year: values.year,
//             latde: values.latde,
//             longtde: values.longtde,
//             street: values.street,
//             street2: values.street2,
//             street3: values.street3,
//             text: values.text,
//             text2: values.text2,
//             text3: values.text3,
//             date: values.date,
//             date2: values.date2,
//             date3: values.date3,
//             die: values.die,
//             die2: values.die2,
//             die3: values.die3,
//             seriousInj: values.seriousInj,
//             seriousInj2: values.seriousInj2,
//             seriousInj3: values.seriousInj3,
//             minorInj: values.minorInj,
//             minorInj2: values.minorInj2,
//             minorInj3: values.minorInj3,
//             materialLoss: values.materialLoss,
//             materialLoss2: values.materialLoss2,
//             materialLoss3: values.materialLoss3,
//         }),
//       }).then((res) => res.json());
//     }
//   );

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
        const response = await axios.post('http://localhost:5000/api/geographic', {
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
//         const response = await axios.get(`http://localhost:5000/api/geographic/${year}`)
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
    post: [],
    loading: false,
    body: "",
    mapsState : 'fill',
    postState : '',
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