import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import MovieList from './components/MovieList';
import { Route, Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  // useEffect(()=> {
  //   fetch("https://www.omdbapi.com/?apikey=99abc8e2&s=harry&type=movie")
  //     .then(response => response.json())
  //     .then(data => console.log(data.Search));
  
  // }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes> 
        <Route path='/' element={<MovieList />} />  
        <Route path='/search' element={<Search />} />
        <Route path='/movie/:imdbID' element={<DetailMovie />} />      
      </Routes>
    </div>
  );
}

export default App;
