import React from 'react'

const PopularMovieDetail = () => {

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
    <div>PopularMovieDetail</div>
    )
}

export default PopularMovieDetail