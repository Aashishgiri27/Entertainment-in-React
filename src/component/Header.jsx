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
}
// {
//   label:"T.V Show",
//  href:'/Tvshow'
// }
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

function handleKeyPress(e) {
  if (e.key === 'Enter') {
    submit(e);
  }
}

  return (
    <table className="h-12 w-5/6 bg-orange-300 mx-auto mb-4 rounded-xl border-slate-500  flex flex-row justify-around max-[600px]:w-full max-[600px]:h-10 ">{
      navitem.map((item,index)=>(
        <tr key={index}>
           <td className="h-10 w-32 text-lg  text-white text-center content-center  border-white  my-auto max-[600px]:text-xs max-[600px]:w-24">
                  
                  <Link to={item.href} style={{ color: location.pathname === item.href ? ' blue' : 'white'}} >{item.label}</Link>
            </td>
        </tr>
      ))
    }
      
 
      <td className='content-center'>
         <input type="search" name="search movie" id="" className='h-8 w-80 border-4 pl-4 rounded-xl max-[600px]:w-28 max-[600px]:h-5 max-[600px]:text-xs' placeholder='Search Movie...' onChange={handlechange}  onKeyDown={handleKeyPress} />
     </td>
     <td className='content-center'>
     <button type="button" className=' w-24  rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 max-[600px]:w-10 max-[600px]:text-xs ' onClick={submit}>Search</button>

     </td>
    </table>
  )
}

export default Header
