import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6397c8348f7a15b7d8170a746ec2bb6c&query=${query}`
    );
    const data = await res.json();
    if (data && data.results) {
      setMovieList(data.results);
    }
  };

  return (
    <>
      <Navbar onSearch={fetchMovies} />
      <HomePage movieList={movieList} />
    </>
  );
}

export default App;

