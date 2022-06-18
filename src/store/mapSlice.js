import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    maps: [],
    mapsState : 'fill',
    error : null
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
},
});

export default mapSlice.reducer