import Header from "./component/Header"
import Container from "./component/Container";
import Item from "./component/Item";
import Genresection from "./component/Genresection";


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
// import Apiup from "./component/Apiup";


const App =()=>{
  return(
    <>
      <h1 className="text-4xl pt-1 mb-2 font-bold text-white text-center animate__animated animate__slideInRight "
      style={{ backgroundImage: 'url(https://media.geeksforgeeks.org/wp-content/uploads/20231218224644/w.jpg)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "transparent",
        backgroundClip: "text",
        webkitBackgroundClip: "text"}}>WATCHMOVIES</h1>
      
      <Header/>
      <Genresection/>
      {/* <Container/> */}
      
         <Routes>
          <Route path="/" element={<Item/>}></Route>
          <Route path="/moviename/:id" element={<Search/>}></Route>
          <Route path="/:name/:id" element={<Genrebody/>}></Route>
          <Route path="/:name" element={<Searchmovie/>}></Route>



          <Route path="/Apiup" element={<Apiup/>}></Route>
          <Route path="/Toprated" element={<Toprated/>}></Route>

         </Routes>
      

    
    </>
  )
}
export default App