import React from 'react'
import { useState } from 'react';
import Create from './Create';

function Genresection() {

const [data,setdata]=useState([])


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM3ZTEzM2QwNDQ3OTc0YzdmNTNkNDdhNGRlMWQ4MiIsInN1YiI6IjY2NTE3ZjljNTFjZGY4ZjViYTk2MDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ie6A99CdaGdwXIvAviRtdMU2VbN-Zfa3fpRGQIGNGBw'
        }
      };

 const apigenre = async()=>{
        const response= await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ed37e133d0447974c7f53d47a4de1d82',options)
        const genre=await response.json()
         setdata(genre.genres)
 } 
apigenre()

  return (
    <div className="m-auto w-3/5 mb-4 grid grid-cols-7 grid-rows-2 gap-x-2 gap-y-3 animate__animated animate__fadeInDown  animate__slower">
       {
         data.map((item)=>(
            <div className="h-6 w-28 border-slate-900 text-center content-center rounded-3xl font-medium bg-orange-300" >{item.name}</div>
         ))
       
       }
    </div>
  )
}

export default Genresection
