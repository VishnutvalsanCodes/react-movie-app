import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ onSearch }) {
  const [movie, setMovie] = useState('');

  const handleSearch = () => {
    if (movie.trim()) {
      onSearch(movie);
    }
  };

  return (
    <div className="container-fluid bg-dark py-3 text-white">
      <div className="row justify-content-between align-items-center px-4">
        <div className="col-md-3 fs-4 fw-bold">MovieVerse</div>
        <div className="col-md-6 d-flex">
          <input
            className="form-control me-2 bg-secondary text-white border-0 rounded-0"
            type="search"
            placeholder="Search for movies, shows..."
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <button className="btn btn-danger rounded-0 px-4" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
