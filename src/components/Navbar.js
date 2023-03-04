import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import "./navbar.css"
import { fetchAsyncSearch } from '../features/movie-slice';

function Navbar() {

  const[search, setSearch] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Searching = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncSearch(search))
    navigate('/search')
    setSearch("")
  }

  return (
    <div className='navbar-cont'>
        <Link to="/">
            <h1>Main</h1>
        </Link>
        <div className='search-cont'>
          <form onSubmit={Searching} >
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
    </div>
  )
}

export default Navbar