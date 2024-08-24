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
// import Apiup from "./component/Apiup";


const App =()=>{
  return(
    <>
      <h1 className="text-4xl pt-1 mb-2 font-bold text-white text-center animate__animated animate__slideInRight ">WATCHMOVIES</h1>
      
      <Header/>
      <Genresection/>
      {/* <Container/> */}
      
         <Routes>
          <Route path="/" element={<Item/>}></Route>
          <Route path="/Apiup" element={<Apiup/>}></Route>
          <Route path="/Toprated" element={<Toprated/>}></Route>

         </Routes>
      

    
    </>
  )
}
export default App