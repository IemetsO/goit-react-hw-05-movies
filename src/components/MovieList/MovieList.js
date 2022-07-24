import React, {   useEffect,  useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { getTrendingMovie } from '../api/api';
import { Link } from 'react-router-dom';
import s from "./MovieList.module.css"


const MovieList = () => {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading]= useState(false);
const [error, setError] = useState(false);



  useEffect(() => {
    setIsLoading(true)
      getTrendingMovie()
        .then(data => {
          setMovies(data.data.results);
          setIsLoading(false)
        })
        .catch(error => {setError(error)
         })
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className='mt-5'>
          <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <Alert variant='danger' className='mt-5'>
        Oop! Something went wrong!
     </Alert>
    )
  }

  return (
    <div >
      <div>
        <h1> 
      TRENDING TODAY</h1>
      <ul className={s.list}>
      {movies.map(e => (
        <li key = {e.id}>
          <Link to={`/movies/${e.id}`}>{e.title}</Link></li>
      ))}
    </ul> 
      </div>
    </div>
  );
};

export default MovieList;