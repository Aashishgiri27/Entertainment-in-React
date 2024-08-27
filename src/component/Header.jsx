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
    <table className="h-12 w-5/6 bg-orange-300 mx-auto mb-4 rounded-xl border-slate-500  flex flex-row justify-around ">{
      navitem.map((item,index)=>(
        <tr key={index}>
           <td className="h-10 w-32 text-lg font-medium text-white text-center content-center  border-white  my-auto ">
                  
                  <Link to={item.href} style={{ color: location.pathname === item.href ? ' blue' : 'white'}} >{item.label}</Link>
            </td>
        </tr>
      ))
    }
      
 
      <td className='content-center'>
         <input type="search" name="search movie" id="" className='h-8 w-64 border-4 pl-4 rounded-xl ' placeholder='Search Movie...' onChange={handlechange}  onKeyDown={handleKeyPress} />
         <button type="button" className='ml-4 w-24  rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50' onClick={submit}>Search</button>
     </td>
    </table>
  )
}

export default Header
