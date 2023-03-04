import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../features/movie-slice'
import "./detailmovie.css"


function DetailMovie() {
    const dispatch = useDispatch()
    const { imdbID } = useParams();
    useEffect(()=> {
        dispatch(fetchMovieDetail(imdbID))
    }, [dispatch], imdbID)

    const selector = useSelector(state => state.movies.movieDetail)
    console.log(selector)
  return (
    <div className='detail-cont'>
       <div className='detail-movie-desc'>
            <p className='title'><span>Title:</span> {selector.Title}</p>
            <p className='genre' ><span>Genre:</span> {selector.Genre}</p>
            <p><span>Language:</span> {selector.Language}</p>
            <p><span>Actors:</span> {selector.Actors}</p>
            <p><span>Awards:</span> {selector.Awards}</p>
            <p><span>Country:</span> {selector.Country}</p>
            <p><span>Director:</span> {selector.Director}</p>
            <p><span>Plot:</span> {selector.Plot}</p>
            <p><span>Writer:</span> {selector.Writer}</p>
            <p><span>imdbRating:</span> {selector.imdbRating}</p>
       </div>
       <div className='detail-movie-poster'>
            <img src={selector.Poster} />
       </div>
    </div>
  )
}

export default DetailMovie