import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    Latest:null,
    Popular:null,
    Originals:null,
    Coming:null,
}

const moiveSlice =createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovie:(state,action)=>{
            state.Latest = action.payload.Latest;
            state.Popular = action.payload.Popular;
            state.Originals = action.payload.Originals;
            state.Coming = action.payload.Coming;
        },

    }
})


export const {setMovie} = moiveSlice.actions;


export const selectMovieLatest = (state) => state.movie.Latest;
export const selectMoviePopular = (state) => state.movie.Popular;
export const selectMovieOriginals = (state) => state.movie.Originals;
export const selectMovieComing = (state) => state.movie.Coming;


export default moiveSlice.reducer;