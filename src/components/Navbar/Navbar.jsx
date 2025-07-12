import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="container-fluid bg-dark py-3">
      <div className="row justify-content-between align-items-center px-4">
        {/* Logo or App Name */}
        <div className="col-md-3 text-white fs-4 fw-bold">
          MovieVerse
        </div>

        {/* Search Input & Button */}
        <div className="col-md-6 d-flex">
          <input
            className="form-control me-2 bg-secondary text-white border-0 rounded-0"
            type="search"
            placeholder="Search for movies, shows..."
            aria-label="Search"
          />
          <button
            className="btn btn-danger rounded-0 px-4"
            onClick={GetMovies}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




