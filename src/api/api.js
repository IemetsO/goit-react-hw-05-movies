import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/550?api_key=1949309aa629f4334f453cd9e8380085',
});

export const getTrendingMovie = () =>
  api.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=1949309aa629f4334f453cd9e8380085'
  );
export const getMovie = searchItem =>
  api.get(
    `https://api.themoviedb.org/3/search/movie?api_key=1949309aa629f4334f453cd9e8380085&query=${searchItem}`
  );

export const getMovieInfo = movieID =>
  api.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=1949309aa629f4334f453cd9e8380085`
  );
export const getMovieReview = movieID =>
  api.get(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=1949309aa629f4334f453cd9e8380085`
  );
export const getMovieActors = movieID =>
  api.get(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=1949309aa629f4334f453cd9e8380085`
  );

  


 