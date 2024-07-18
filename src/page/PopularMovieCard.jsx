import React, { useContext } from 'react';
import { MovieContext } from '../provider/MovieProvider';

const PopularMovieCard = () => {
  const { popularMovie } = useContext(MovieContext);

  // const handleMovieclick = ()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
      {popularMovie?.map((movie, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // Adjust the image path based on your movie data
            alt={movie.title}
            className="w-full h-fit object-cover"
            onClick={() => handleMovieclick(movie)}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-600">Release Date: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularMovieCard;
