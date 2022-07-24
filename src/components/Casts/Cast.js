import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieActors } from '../api/api';
import { Alert } from 'react-bootstrap';
import s from './Cast.module.css';

const Cast = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovieActors(params.movieId)
      .then(movie => setMovie(movie.data.cast))
      .catch(err => {
        setError(err);
      });
  }, [params.movieId]);

  if (error) {
    return (
      <Alert variant="danger" className="mt-5">
        Oop! Something went wrong!
      </Alert>
    );
  }
  return (
    <div className={s.container}>
      {movie.length > 0 && (
        <ul>
          {movie.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <div className={s.wraper}>
                <img
                  className={s.img}
                  src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : 
                  "https://via.placeholder.com/50"}
                  alt="foto"
                ></img>
              </div>
              <p className={s.text}> name: {name}</p>
              <p className={s.text}> character: {character}</p>{' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
