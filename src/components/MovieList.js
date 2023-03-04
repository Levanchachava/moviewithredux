import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movie-slice'
import Movies from './Movies'
import "./movie.css"


function MovieList() {
    const dispatch = useDispatch()
    const allMovies = useSelector(state => state.movies.movies)
    const allShow = useSelector(state => state.movies.Shows)
    const searchmovie = useSelector(state => state.movies.searchMovie)
   

    useEffect(()=> {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])

  return (
    <div>
        <div className='movie-cont'>
            {/* <h1>Movies</h1> */}
            {/* {searchmovie.Response==="True" ? searchmovie.Search.map((item)=> (
                <Movies item={item} />
            )): "loading"} */}


            {allMovies.Response==="True" ? allMovies.Search.map((item)=> (
                <Movies item={item} />
            )): "loading"}

            {allShow.Response==="True" ? allShow.Search.map((item)=> (
                <Movies item={item} />
            )): "loading"}

        </div>
    </div>
  )
}

export default MovieList