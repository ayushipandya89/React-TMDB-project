import { useContext, useEffect } from 'react';
import PopularMovieCard from './PopularMovieCard';
import { MovieContext } from '../provider/MovieProvider';

const  PopularMovie = () => {
  const {setPopularMovie} = useContext(MovieContext)
  const API_KEY = '5408f85256c91d553d8a62925b5cfb1f';

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      console.log('response', response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('data', data);
      setPopularMovie(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setPopularMovie]);  

  return (
    <div>
      <h1 className='text-3xl mb-6'>Popular Movies</h1>
      <PopularMovieCard />
    </div>
  );
}

export default PopularMovie;
