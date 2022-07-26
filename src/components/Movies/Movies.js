import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../../api/api';
import SearhMovieList from "../SearchMovieList/SearchMovieList"

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
      getMovie(query).then(response => {
        setMovies(response.data.results);
      });
    }
  }, [query]);


  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  
  const onSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    setSearchParams(`query=${searchQuery}`);
    getMovie(query).then(response => {
      setMovies(response.data.results);
    });
  }
  

 



  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name="searchMovie"
          placeholder="Search"
          id="input"
          value={searchQuery}
          onChange={onChange}
        />
      </form>
      <div>
       <SearhMovieList movies = {movies}></SearhMovieList>
      </div>
    </div>
  );
}
