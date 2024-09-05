import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Language() {
const [data,setdata]=useState("")
const navigate=useNavigate()
const options = JSON.parse(import.meta.env.VITE_APP_OPTIONS);
const apiKey = import.meta.env.VITE_APP_APIKEY;
async function language(name) {
  const response = await fetch( ` https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`, options);

  const datalanguage = await response.json();
  // console.log(name)
  // setdata(datalanguage);
  datalanguage.forEach((item) => {
    if (item.english_name == name) {
      // console.log(item.iso_639_1);
    navigate(`/Language/${name}/${item.iso_639_1}`)

    }
  });

}
  function capitalizeFirstLetter(string) {
    // console.log(string)
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleclick(e) {
    const capitalizedValue = capitalizeFirstLetter(e.target.value);
    setdata(capitalizedValue);
  }
  function submit(e){
    e.preventDefault(); 
    language(data)
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      submit(e);
    }
  }

  return (
    <div className="flex flex-row justify-center mb-4">
      <input type="text" placeholder="Search Language like English,Hindi,Tamil...." id="" className="w-1/2 h-8 border-2 pl-3 border-black max-[600px]:h-6 max-[600px]:text-sm max-[600px]:w-3/4" onChange={handleclick}  onKeyDown={handleKeyPress}/>
      <button type="button" className='ml-4 w-24  rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 max-[600px]:text-xs max-[600px]:w-20' onClick={submit}>Search</button>
      
    </div>
  );
}

export default Language;
