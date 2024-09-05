import React from 'react'
import { useState } from 'react';
import Create from './Searchmovie';
import { useNavigate } from 'react-router-dom';

function Genresection() {

const [data,setdata]=useState([])
const [colorid,setcolorid]=useState(null)

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM3ZTEzM2QwNDQ3OTc0YzdmNTNkNDdhNGRlMWQ4MiIsInN1YiI6IjY2NTE3ZjljNTFjZGY4ZjViYTk2MDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ie6A99CdaGdwXIvAviRtdMU2VbN-Zfa3fpRGQIGNGBw",
  },
};
const apiKey = import.meta.env.VITE_APP_APIKEY;

 const apigenre = async()=>{
        const response= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,options)
        const genre=await response.json()
         setdata(genre.genres)
 } 

apigenre()

const navigate=useNavigate()

function handledata(id,name){
  setcolorid(id)
 navigate(`/${name}/${id}`)
}
  return (
    <div className="m-auto w-2/3 mb-4 grid grid-cols-7 grid-rows-2 gap-x-2 gap-y-3 max-[600px]:w-full max-[600px]:grid-rows-5 max-[600px]:grid-cols-4  max-[600px]:gap-y-1 max-[600px]:gap-x-0 ">
       {
         data.map((item)=>(
            <div className={`h-6 w-32 text-center content-center shadow-xl shadow-orange-500/50 rounded-3xl font-medium border-2 max-[600px]:w-auto max-[600px]:text-xs max-[600px]:h-5
              ${colorid === item.id ? 'bg-red-700 border-orange-500 text-blue-500' : 'bg-orange-700 border-red-500  text-white'}`}
            onClick={()=>handledata(item.id,item.name)}>{item.name}</div>
         ))
       
       }
    </div>
  )
}

export default Genresection
