import React from 'react'
import MovieProvider from './provider/MovieProvider'
import { Outlet } from 'react-router-dom'
import Header from './common/Header'

const MasterLayout = () => {
  return (
    <>
        <MovieProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow h-[calc(100vh-122px)] overflow-hidden overflow-y-auto p-10">
            <Outlet />
          </main>
        </div>
        </MovieProvider>
    </>
  )
}

export default MasterLayout