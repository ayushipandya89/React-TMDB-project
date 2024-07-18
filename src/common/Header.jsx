import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-emerald-950 px-10 py-2 text-white flex items-center justify-between shadow drop-shadow gap-3 h-64px">
      <Link to="/" className="inline-flex items-center">
        <img
            
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-premiere-is-a-timeline-based-video-editing-app-developed-by-adobe-logo-color-tal-revivo.png"
            alt="PremierePalace"
            className=" h-11 w-11 mr-2"
        />
        <div>
          <h1 className="text-x font-bold text-[#EA77FE]">Premiere</h1>
          <p className="text-sm text-[#EA77FE]">Palace</p>

        </div> 
      </Link>
     
      <div className="flex items-center ml-auto gap-5">
        <Link to="/" className="font-bold text-lg hover:text-yellow-300 transition duration-300 ease-in-out">
          Login
        </Link>
        <Link to="/" className="font-bold text-lg lg hover:text-yellow-300 transition duration-300 ease-in-out">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Header