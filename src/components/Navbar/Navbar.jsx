import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {

  const[movie,setMovie]=useState('')
  const[movieList,setMovielist]=useState([])
  const GetMovies= async()=>{
     const res= await fetch (`https://api.themoviedb.org/3/search/movie?api_key=6397c8348f7a15b7d8170a746ec2bb6c&query=${movie}`)
     const data=res.json()
     if(data){
     
      setMovielist(data.results)
     }
    }//get movie which is entered in the field

  
  
  return (
    <div className="container-fluid bg-dark py-3">
      <div className="row justify-content-between align-items-center px-4">
        
        <div className="col-md-3 text-white fs-4 fw-bold">
          MovieVerse
        </div>

        
        <div className="col-md-6 d-flex">
          <input
            className="form-control me-2 bg-secondary text-white border-0 rounded-0"
            type="search"
            placeholder="Search for movies, shows..."
            aria-label="Search"
            value={movie}
            onChange={(e)=>setMovie(e.target.value)}
          />
          <button
            className="btn btn-danger rounded-0 px-4"
            onClick={GetMovies}
          >
            Search
          </button>

          <div className="col">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




