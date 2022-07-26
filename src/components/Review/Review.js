import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {getMovieReview} from "../../api/api";
import { Alert } from 'react-bootstrap';
import s from './Review.module.css';

const Review = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovieReview(params.movieId)
      .then(movie => setMovie(movie.data.results))
      .catch(err => {
        setError(err);
        console.log(error);
      });
  }, [params.movieId, error]);

  if (error) {
    return (
      <Alert variant="danger" className="mt-5">
        Oop! Something went wrong!
      </Alert>
    );
  }
  return (
    <div className={s.container}>
      {movie.length === 0 && <div>We do not have any reviews</div>}
      {movie.length > 0 && (
        <div>
          {movie.map(({ author, content, id }) => (
            <div key={id}>
              <h3 className={s.tittle}>{author}</h3>
              <p className={s.text}>{content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
