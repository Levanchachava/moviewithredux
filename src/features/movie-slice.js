import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import movieaApi from "../common/movieaApi";

const initialState = {
    movies: {},
    Shows: {},
    movieDetail: {},
    searchMovie: {}
}

const apiKey = "99abc8e2"

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        const movieText = "harry"
        const response = await movieaApi.get(
            `?apiKey=${apiKey}&s=${movieText}&type=movie`
        )
        return response.data;
    }
)
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
        const movieText = "friends"
        const response = await movieaApi.get(
            `?apiKey=${apiKey}&s=${movieText}&type=series`
        )
        return response.data;
    }
)

export const fetchAsyncSearch = createAsyncThunk(
    "movies/fetchAsyncSearch",
    async (searchMovie) => {
        const response = await movieaApi.get(
            `?apiKey=${apiKey}&s=${searchMovie}&type=movie`
        )
        return response.data;
    }
)


export const fetchMovieDetail = createAsyncThunk(
    "movie/fetchMovieDetail",
    async (id)=> {
        const response = await movieaApi.get(
            `?apiKey=${apiKey}&i=${id}&Plot=full`
        )
        return response.data
    }
)



const movieslice = createSlice({
    name: "movies",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fulfilled")
           return {...state, movies: payload }
        },
        [fetchMovieDetail.fulfilled]: (state, {payload}) => {
            return {...state, movieDetail: payload}
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            return {...state, Shows: payload}
        },
        [fetchAsyncSearch.fulfilled]: (state, {payload}) => {
            return {...state, searchMovie: payload}
        }
    }
})

export default movieslice.reducer
