import React from 'react'
import 'animate.css';
import {Link, useLocation} from "react-router-dom"


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
console.log(location)

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
         <input type="search" name="search movie" id="" className='h-8 w-64 border-4 pl-4 rounded-xl ' />
         <button type="button" className='ml-4 w-20 text-white bg-blue-600 rounded border-2 border-white '>Seach</button>
     </div>
    </div>
  )
}

export default Header
