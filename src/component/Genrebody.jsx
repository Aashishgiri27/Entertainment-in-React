import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Genrebody() {
    const {id,name}=useParams()

    const [data,setdata]=useState([])
    useEffect(()=>{
        makingagenrebody(id)
    },[id])


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM3ZTEzM2QwNDQ3OTc0YzdmNTNkNDdhNGRlMWQ4MiIsInN1YiI6IjY2NTE3ZjljNTFjZGY4ZjViYTk2MDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ie6A99CdaGdwXIvAviRtdMU2VbN-Zfa3fpRGQIGNGBw'
        }
      };
    async function makingagenrebody(idofgenre){
        const response= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed37e133d0447974c7f53d47a4de1d82&with_genres=${idofgenre} `,options)
        const r=await response.json()
        setdata(r.results)
    
    }
    const navigate = useNavigate();
    const handleonclick=(itemid)=>{
      navigate(`/moviename/${itemid}`)
    }
  return (
    <>
    <h1 className="text-black text-4xl text-center bg-stone-300 border-2 mx-2 mb-1 rounded-2xl shadow-2xl shadow-blue-500/60 ">
    {name}
    </h1>

    <div className="grid mx-24 md:grid-cols-4  md:grid-rows-5 gap-y-5">
      {data.map((item, index) => (
        // {/* // <AnimationOnScroll animateIn="animate__fadeInUp animate__fast"> */}
        <div
          className="h-96 w-72 mt-3 ml-8  rounded-3xl border-blue-400 border-2 shadow-2xl shadow-blue-300 "
          key={index}
          onClick={() => handleonclick(item.id)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt=""
            className="h-80 w-72 rounded-t-3xl "
          />
          <div className="text-white h-16 bg-black rounded-b-3xl flex flex-row justify-between items-center rounded-t-3x">
            <h3 className="pl-2 text-xl">{item.title}</h3>
            <div className="h-10 w-10 bg-blue-400 text-center content-center rounded-3xl">
              {item.vote_average}
            </div>
          </div>
        </div>
        // {/* //  </AnimationOnScroll> */}
       ))} 
    </div>
  </>
  )
}

export default Genrebody
