import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Movielang() {
  // const {id}=useParams()
  const { name } = useParams();
  const { fullname } = useParams();


  const [data, setdata] = useState([]);
  // const [dataid,setdataid]=useState(null)
  useEffect(() => {
    language(name);
  }, [name]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM3ZTEzM2QwNDQ3OTc0YzdmNTNkNDdhNGRlMWQ4MiIsInN1YiI6IjY2NTE3ZjljNTFjZGY4ZjViYTk2MDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ie6A99CdaGdwXIvAviRtdMU2VbN-Zfa3fpRGQIGNGBw",
    },
  };
  const apiKey = import.meta.env.VITE_APP_APIKEY;

  async function language(name) {

    const responseoflanguage = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=` +
        name,
      options
    );
    const output = await responseoflanguage.json();
    // console.log('data come')
    // console.log(output);
    setdata(output.results);
  }
  const navigate = useNavigate();
  const handleonclick=(item)=>{
    navigate(`/moviename/${item.id}`)
  }
  return (
    <>
    <h1 className="text-black text-4xl text-center bg-stone-300 border-2 mx-2 mb-1 rounded-2xl shadow-2xl shadow-blue-500/60 max-[600px]:text-2xl">
      {fullname}
    </h1>

    <div className="grid mx-24 grid-cols-4  grid-rows-5 gap-y-5 max-[600px]:mx-3 max-[600px]:grid-cols-2 max-[600px]:grid-rows-10">
      {data.map((item, index) => (
        // <AnimationOnScroll animateIn="animate__fadeInUp animate__fast">
        <div
          className="h-96 w-72 mt-3 ml-8  rounded-3xl border-blue-400 border-2 shadow-2xl shadow-blue-300 max-[600px]:h-72 max-[600px]:w-44 max-[600px]:ml-0"
          key={index}
          onClick={() => handleonclick(item)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt=""
            className="h-80 w-72 rounded-t-3xl max-[600px]:h-60 max-[600px]:w-44"
          />
          <div className="text-white h-16 bg-black rounded-b-3xl flex flex-row justify-between items-center rounded-t-3x max-[600px]:h-12">
            <h3 className="pl-2 text-xl max-[600px]:text-xs">{item.title}</h3>
            <div className="h-10 w-10 bg-blue-400 text-center content-center rounded-3xl max-[600px]:h-7 max-[600px]:w-7 max-[600px]:rounded-xl max-[600px]:text-xs">
              {item.vote_average}
            </div>
          </div>
        </div>
        //  </AnimationOnScroll>
      ))}
    </div>
  </>
  );
}

export default Movielang;
