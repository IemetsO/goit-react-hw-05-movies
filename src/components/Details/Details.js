import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieInfo } from '../api/api';
import { Spinner, Alert } from 'react-bootstrap';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import s from './Details.module.css';

const Details = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getMovieInfo(params.movieId)
      .then(movie => setMovieData(movie.data))
      .catch(err => {
        setError(err);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.movieId, error]);

  const goBack = () => navigate(-1);

  if (loading || !movieData) {
    return (
      <Spinner animation="border" role="status" className="mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-5">
        Oop! Something went wrong!
      </Alert>
    );
  }
  return (
    <div className={s.container}>
      <button type="button" className={s.button} onClick={goBack}>
        go back
      </button>
      <div className={s.flex_wrapper}>
        <div className={s.wrapper}>
          <img
            src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : "https://via.placeholder.com/100"}
            alt="poster"
            className={s.image}
          ></img>
        </div>
        <div className={s.wrapper}>
          <h2 className={s.tittle}>Title : </h2>
          <p className={s.text}>{movieData.title}</p>
          <h2 className={s.tittle}>User Score : </h2>
          <p className={s.text}>{movieData.vote_average}</p>
          <h2 className={s.tittle}>Overview: </h2>
          <p className={s.text}>{movieData.overview}</p>
          <h2 className={s.tittle}>Genres: </h2>
          {movieData.genres.map(({ name }) => (
            <p key={name} className={s.text}>
              {name}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h2 className={s.additional}>Additional information</h2>
        <Link to={`/movies/${params.movieId}/cast`}> Cast</Link>
        <Link to={`/movies/${params.movieId}/review`}> Review</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Details;
