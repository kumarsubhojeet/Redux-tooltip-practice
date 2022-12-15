import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCockets = createAsyncThunk(
    'cocktails/fetchCockets', async () =>{
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`).then(
            (res) => res.json()
        )
    }
)

const cocktailSlice = createSlice({
    name:'cocktails',
    initialState:{
        loading: false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [fetchCockets.pending] : (state , action) => {
            state.loading =  true
        },
        [fetchCockets.fulfilled] : (state , action) => {
            state.loading =  false;
            state.cocktails = action.payload.drinks
        },
        [fetchCockets.pending] : (state , action) => {
            state.loading =  false;
            state.error = action.payload
        },
    }
})


export default cocktailSlice.reducer;