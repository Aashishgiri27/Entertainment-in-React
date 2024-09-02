import React, { useEffect,useState } from 'react'

function Actors({id,options}) {
const [data,setdata]=useState([])
useEffect(()=>{
    actor(id,options)
},[id,options]);
async function actor(id,options)  {
        //for creating the cast and crew of movie
        const responseofimage= await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ed37e133d0447974c7f53d47a4de1d82&language=en-US`,options)
        const castofimage=await responseofimage.json()
        // console.log(castofimage);
        setdata(castofimage.cast)
}
  return (
    <div className=''>
      <h1 className="bg-blue-400 w-full text-center text-2xl rounded-lg max-[600px]:text-lg">ACTORS</h1>
      <div className=' flex flex-row overflow-x-auto overflow-y-hidden '>
        {data.map((item,index)=>(
            <div className='h-60 w-44 min-w-36 mr-3 b mt-6 max-[600px]:h-40  max-[600px]:min-w-20 max-[600px]:mt-2' key={index}>
            
            <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />


            <p className='text-white bg-blue-500 text-sm max-[600px]:text-xs '>{item.original_name}</p>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Actors
