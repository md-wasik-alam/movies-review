
import { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';

function App() {
  // const [isLoading, setIsLoading] = useState(false)
  const [searchData, setSearchData] = useState("")
  const [moviesList, setMoviesList] = useState([])

  const API_KEY = "16c66b0f7fd3c3447e7067ff07db3197"


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData)
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
          await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchData}`)
          .then(response => response.json())
          
          .then(response => setMoviesList(response.results))
      }
      catch (error) {
        console.log(error)
      }
    }
    (searchData.length!==0)?fetchData():setMoviesList([])
  }, [searchData])
 
  return (
    <>
      <div className='container-fluid py-5'>
        <div className='text-center'>
          <h2 className='display-6 text-white'>Movies <span className='text-danger'>Finder</span></h2>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-5 col-xs-12 w-96 mx-auto'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className='form-control border-0 shadow-0'
                  placeholder='type movies name here '
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                ></input>
              </form>
            </div>
          </div>

          <MoviesList movies={moviesList} />

        </div>
        <span className=' text-xs text-orange-500 '>@ Created By Wasik
        {/* </span> */}
      </div>
    </>
  );
}

export default App;
