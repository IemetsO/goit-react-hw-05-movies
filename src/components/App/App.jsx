import {Routes, Route} from "react-router"
import {BrowserRouter, NavLink} from "react-router-dom"
import {lazy, Suspense} from "react"
import { Spinner } from 'react-bootstrap';

const Details = lazy(() => import(/* webpackChunkName: "movie-details"*/"../Details/Details"))
const Cast = lazy(()=> import(/* webpackChunkName: "cast"*/"../Casts/Cast"))
const Review = lazy(()=> import(/* webpackChunkName: "review"*/"../Review/Review"))
const Movies = lazy(()=> import(/* webpackChunkName: "movie-search"*/"../Movies/Movies"))
const NotFound = lazy(()=> import("../Not Found/NotFound"))
const MovieList =lazy(()=> import(/* webpackChunkName: "movie-Home"*/"../MovieList/MovieList"))



export default function App(){
  return (
    <BrowserRouter>
    <div>
    <ul className="nav" >
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/movies" className="nav-link">Movies</NavLink>
</ul>
</div>
<Suspense fallback={<Spinner animation="border" role="status" className='mt-5'>
          <span className="visually-hidden">Loading...</span>
      </Spinner>
    }>
    <Routes>
<Route path="/" element={<MovieList/>}></Route>
<Route path="/movies" element={<Movies/>}></Route>
<Route path="/movies/:movieId" element ={<Details/>}>
<Route path="cast" element = {<Cast/>}></Route>
<Route path="review" element = {<Review/>}></Route></Route>
<Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}
