import React, { useState } from 'react'
import 'animate.css';
import {Link, useLocation, useNavigate} from "react-router-dom"


const navitem=[{
  label:"Now-Playing",
  href:'/'
},
{
  label:"Up-Comming",
  href:'/Apiup'
},
{
  label:"Top-Rated",
  href:'/Toprated'
},
{
  label:"T.V Show",
 href:'/Tvshow'
}
]

function Header() {
   
const location=useLocation()
const [inputdata,setinputdata]=useState("")
function handlechange(e){

setinputdata(e.target.value)
}
const navigate=useNavigate()
function submit(e){
  e.preventDefault();
  navigate(`/${inputdata}`);
}

  return (
    <div className="h-16 w-4/5  mx-auto rounded-xl border-slate-500  flex flex-row justify-around animate__animated animate__slideInLeft">{
      navitem.map((item,index)=>(
        <div key={index}>
           <div className="h-10 w-32 text-lg font-medium text-white text-center content-center  border-white  my-auto ">
                  
                  <Link to={item.href} style={{ borderBottom: location.pathname === item.href ? '2px solid blue' : 'transparent'}} >{item.label}</Link>
            </div>
        </div>
      ))
    }
      
 
      <div className='content-center'>
         <input type="search" name="search movie" id="" className='h-8 w-64 border-4 pl-4 rounded-xl ' onChange={handlechange} />
         <button type="button" className='ml-4 w-20 text-white bg-blue-600 rounded border-2 border-white ' onClick={submit}>Seach</button>
     </div>
    </div>
  )
}

export default Header
