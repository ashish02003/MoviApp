import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";

          
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
    // const movieText = "Harry";   
    const response = await MovieApi.get(`?apikey=56bcba8b &s=${term}&type=movie`
    );    
    return response.data;    
});   

     
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShow',async(term)=>{
    // const seriesText = "Friends";     
    const response = await MovieApi.get(`?apikey=56bcba8b &s=${term}&type=series`
    );
    return response.data;
});


export const fetchAsyncShowOrMovieDetail = createAsyncThunk('movies/fetchAsyncShowOrMovieDetail',async(id)=>{
     
    const response = await MovieApi.get(`?apikey=56bcba8b &i=${id}&Plot=full`
    );
    return response.data; 
    console.log(response.data)
});
   


  
const initialState = {
    movies:{},
    shows:{},
    selectShowOrMovie:{},
};

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectShowOrMovie={}; 
        }
    },
    extraReducers(builder){
           builder.addCase(fetchAsyncMovies.pending,()=>{
            console.log("pending");
           })
           builder.addCase(fetchAsyncMovies.fulfilled,(state,{payload})=>{
            console.log("Fetched Successfully!!")
            return {...state,movies:payload}
           })

          
           builder.addCase(fetchAsyncMovies.rejected,()=>{
            console.log("Rejected"); 
           })

           builder.addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
            console.log("Fetched Successfully!!")
            return {...state,shows:payload}
           })

           builder.addCase(fetchAsyncShowOrMovieDetail.fulfilled,(state,{payload})=>{
            console.log("Fetched Successfully!!")
            return {...state,selectShowOrMovie:payload}
           })           
      
  
    }, 
});
 
export const {removeSelectedMovieOrShow} = movieSlice.actions;

export const  getAllMovies = (state)=> state.movies.movies; //for finding all movies data
export const  getAllShows = (state)=> state.movies.shows; 
export const  getSelectedShowOrMovie= (state)=> state.movies.selectShowOrMovie; 
export default movieSlice.reducer;