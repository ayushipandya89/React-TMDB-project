import React, { createContext, useState } from 'react'

export const MovieContext = createContext(null)

const MovieProvider = ({children}) => {

  const [popularMovie, setPopularMovie] = useState([])

  return (
    <MovieContext.Provider value={{popularMovie, setPopularMovie}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider;
