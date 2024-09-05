import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actors from "./Actors";
function Search() {
  const { id } = useParams();
  const [data, setdata] = useState("");
  const [image, setimage] = useState("");
  const [trailer, settrailer] = useState("");

  useEffect(() => {
    searchmoviedetail(id);
  }, [id]);
  const options = JSON.parse(import.meta.env.VITE_APP_OPTIONS);
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  async function searchmoviedetail(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
      options
    );
    const dataresponse = await response.json();
    // console.log(dataresponse)
    setdata(dataresponse);

    // for creating poster image of movie
    var imagedata = `https://image.tmdb.org/t/p/original/${dataresponse.poster_path}`;
    setimage(imagedata);

    //for creating trailer of movie
    const responseoftrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`,
      options
    );
    const roftrailer = await responseoftrailer.json();
    
    if (roftrailer.results.length > 0) {
      var trailerofmovie = "Trailer";
      for (var i = 0; i < roftrailer.results.length; i++) {
        if (roftrailer.results[i].type == trailerofmovie) {
          var movietrailerkey = `https://www.youtube.com/embed/${roftrailer.results[i].key}?`;
          settrailer(movietrailerkey);
        }
      }
    }
  }

  return (
    <>
    <h1 className="text-black text-4xl text-center bg-stone-300 border-2 mx-2 mb-1 rounded-2xl shadow-2xl shadow-blue-500/60  max-[600px]:text-2xl ">
    {data.original_title}
  </h1>
    <div
      className="bg-white shadow-2xl shadow-cyan-500/50"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        
      <div className="flex flex-row mx-auto w-11/12 h-3/4 justify-around bg-slate-800 bg-opacity-25 rounded-3xl shadow-xl shadow-slate-800  max-[600px]:flex-col">
         {/* poster and name of movie */}
       
        <div className=" w-96 h-5/6  mr-10 my-auto  rounded-3xl border-blue-400 border shadow-xl shadow-blue-300 max-[600px]:w-72 max-[600px]:mx-auto max-[600px]:mt-5 ">
          <img className="h-auto w-auto rounded-3xl   max-[600px]:w-72" src={image} alt="" />
          <div className="flex flex-row justify-between h-16 ">
            <p className="text-white text-center content-center text-3xl  max-[600px]:text-2xl">{data.original_title}</p>
            <div className="h-14 w-14 bg-blue-400 text-center content-center rounded-full">{data.vote_average}</div>
          </div>

          {/* description of moviename */}
        </div>
        <div className="w-2/3 my-8  max-[600px]:w-full max-[600px]:my-3">
          <h1 className="bg-blue-400 w-full text-center text-2xl rounded-lg max-[600px]:text-lg">DESCRIPTION</h1>
          <div className="my-8 max-[600px]:my-2">
            <div className="text-white text-lg mb-4 ">{data.overview}</div>
            <div className="flex flex-row justify-between"> 
            <div className="text-white w-80 bg-sky-500 text-center rounded-2xl max-[600px]:w-40  max-[600px]:text-xs max-[600px]:h-5"><b className="text-black text-xl  max-[600px]:text-xs">RELEASE DATE :-</b>{data.release_date} </div>
            <div className="text-white  w-80 bg-sky-500 text-center rounded-2xl  max-[600px]:w-40 max-[600px]:text-xs max-[600px]:h-5">
              <b className="text-black text-xl max-[600px]:text-xs"> LANGUAGE :-</b>
              {data.spoken_languages && data.spoken_languages.length > 0
                ? data.spoken_languages[0].english_name
                : "N/A"}
            </div>
            </div>
          </div>

          {/* tailer of movie */}
          <h1 className="bg-blue-400 w-full text-center text-2xl rounded-lg max-[600px]:text-lg">TRAILER</h1>
          <div className="my-6 flex flex-row justify-center content-centermax-[600px]:my-4">
            <iframe 
              width="400"
              height="250"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <Actors id={id} options={options} />
        </div>
      </div>
   
    </div>
    </>
  );
}

export default Search;
