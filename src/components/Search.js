import React from 'react'
import { useSelector } from 'react-redux'
import SearchAllMovies from './SearchAllMovies'
import "./searchmovie.css"

function Search() {
    const searchmovie = useSelector(state=> state.movies.searchMovie)
    console.log(searchmovie)
  return (
    <div className='searchs-cont'>
          {searchmovie.Response==="True" ? searchmovie.Search.map((item)=> (
                <SearchAllMovies item={item} />
            )): ""} 
    </div>
  )
}

export default Search