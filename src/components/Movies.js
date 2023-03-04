import React from 'react'
import { Link } from 'react-router-dom'
import "./movie.css"

function Movies(props) {
  return (
    <div className='movie-listing' >
        <Link to={`/movie/${props.item.imdbID}`}>
            <img src={props.item.Poster} />
            <h4>{props.item.Title}</h4>
            <p>Release Date: {props.item.Year}</p>
        </Link>
    </div>
  )
}

export default Movies