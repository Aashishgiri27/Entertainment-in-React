import { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useNavigate } from "react-router-dom";
const Item = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {

    apinowplaying();
  }, []);
  const options = JSON.parse(import.meta.env.VITE_APP_OPTIONS);
  const apiKey = import.meta.env.VITE_APP_APIKEY;
 

  const apinowplaying = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
      options
    );
  
    const nowplaying = await response.json();
    setdata(nowplaying.results);
  };
  const navigate = useNavigate();
  const handleonclick=(item)=>{
    navigate(`/moviename/${item.id}`)
  }

  return (
    <>
      <h1 className="text-black text-4xl text-center bg-stone-300 border-2 mx-2 mb-1 rounded-2xl shadow-2xl shadow-blue-500/60 max-[600px]:text-2xl">
        NOW-PLAYING
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
};
export default Item;
