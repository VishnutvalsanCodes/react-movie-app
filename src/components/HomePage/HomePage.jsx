import React from 'react';

function HomePage({ movieList }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {movieList.map((movie) => (
          <div key={movie.id} className="col-md-2 mb-4">
            <div className="card bg-dark text-white">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
              </div>
            </div>
          </div>
        ))}
        {movieList.length === 0 && (
          <p className="text-muted text-center">No movies found. Try searching!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;


