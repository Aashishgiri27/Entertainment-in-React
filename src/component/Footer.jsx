import React from 'react'

function Footer() {
  return (
    <div className='h-80 flex flex-col justify-center content-center bg-slate-500 mt-10 max-[600px]:h-64' >
      <h1 className="text-7xl pt-1 w-full mb-2 font-bold text-white text-center  max-[600px]:text-4xl"
      style={{ backgroundImage: 'url(https://media.geeksforgeeks.org/wp-content/uploads/20231218224644/w.jpg)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "transparent",
        backgroundClip: "text",
        webkitBackgroundClip: "text"}}> WATCHMOVIES </h1>
        <div className='w-3/4 mx-auto text-white text-xl mt-6 max-[600px]:text-sm max-[600px]:mt-3 max-[600px]:w-11/12'>Create a sleek, user-friendly movie recommendation website called <b>WatchMovie</b> . The site should feature a search bar for finding movies by title, genre, or actor. Each movie page should include the title, release date, synopsis, trailer, genres, cast, user ratings, reviews, and streaming options. The homepage should showcase trending movies, upcoming releases, and personalized recommendations. Include options for light/dark mode, social sharing .</div>
    </div>
  )
}

export default Footer
