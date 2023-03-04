import React from 'react'
import { Link } from 'react-router-dom'
import "./searchmovie.css"

function SearchAllMovies(props) {
  return (
    <div className='searchmovie-listing'>
        <Link to={`/movie/${props.item.imdbID}`}>
            <img src={props.item.Poster} />
            <h4>{props.item.Title}</h4>
            <p>Release Date: {props.item.Year}</p>
        </Link>
    </div>
  )
}

export default SearchAllMovies