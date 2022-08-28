import MoviesCard from './MoviesCard'

const MoviesList = ({ movies }) => {
 
  return (
    <div className='row border-0'>
      {
        movies.map((movie, index) => (

          <MoviesCard  movies={movie} key={index}/>

        ))
      }

      {/* <MoviesCard /> */}
     
    </div>
  )
}

export default MoviesList
