import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from 'components/api/api';



export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchItem, setSearchItem] = useState("")
  const [movies, setMovies] = useState([]);
 

  const onSubmit = e => {
    e.preventDefault();
    
    setSearchMovie(searchItem);
  };
  
  const onChange=(e)=>{
    setSearchItem(e.target.value); 
  }

  useEffect(() => {
    if (searchMovie === '') {
      return;
    }

    getMovie(searchMovie).then(response => {
      setMovies(response.data.results);
    });
  }, [searchMovie]);

  return (

      <div >
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="searchMovie"
            placeholder="Search"
            value={searchItem}
            onChange={onChange}
             
          />
         </form>
        <div>
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
}