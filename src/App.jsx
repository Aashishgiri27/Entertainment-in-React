import Header from "./component/Header"
// import Container from "./component/Container";
import Item from "./component/Item";
import Genresection from "./component/Genresection";
import sun from "./image/sun.png"
import dark from "./image/dark.png"
import Language from './component/Language';



// import {BrowserRouter,Routes,Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import {Routes } from 'react-router-dom';

import { Route } from 'react-router-dom';

import 'animate.css';
import Apiup from "./component/Apiup";
import Toprated from "./component/Toprated";
import Search from "./component/Search";
import Genrebody from "./component/Genrebody";
import Searchmovie from "./component/Searchmovie";
import { useState } from "react";
import Footer from "./component/Footer";
import Movielang from "./component/Movielang";
// import Apiup from "./component/Apiup";


const App =()=>{
  const [data,setdata]=useState(true)
  function change(){
    setdata(!data)
  }
  return(
    <div style={{backgroundColor:data?"white":"black"}}>
      <div className="flex flex-row ">
      <h1 className="text-5xl pt-1 w-full mb-2 font-bold text-white text-center animate__animated animate__slideInRight "
      style={{ backgroundImage: 'url(https://media.geeksforgeeks.org/wp-content/uploads/20231218224644/w.jpg)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "transparent",
        backgroundClip: "text",
        webkitBackgroundClip: "text"}}>WATCHMOVIES</h1>
      <img aria-hidden="true" alt="service" src={data?dark:sun} className="h-12 w-12" onClick={change}/>
      </div>
      <Header/>
      <Genresection/>
      <Language/>

      {/* <Container/> */}
      
         <Routes>
          <Route path="/" element={<Item/>}></Route>
          <Route path="/moviename/:id" element={<Search/>}></Route>
          <Route path="/:name/:id" element={<Genrebody/>}></Route>
          <Route path="/:name" element={<Searchmovie/>}></Route>
          <Route path="/Language/:fullname/:name" element={<Movielang/>}></Route>



          <Route path="/Apiup" element={<Apiup/>}></Route>
          <Route path="/Toprated" element={<Toprated/>}></Route>

         </Routes>
      
        <Footer/>
    
    </div>
  )
}
export default App