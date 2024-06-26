import React from 'react'
import {Link, useLocation, useNavigation } from 'react-router-dom'
import BsSearch from 'react-icons/bs'

function Navbar() {
  const [promt, setPrompt] = useState("")
  const [menu, setMenu] =useState(false)
  const navigate = useNavigation()
  const path= useLocation().pathname


  return (
    <div>
      <div className=" flex item-center justify-between px-6 md:px-[200px] py-4 bg-black text-white">
        <h1 className=' text-lg md:text-xl font-extrabold '><Link to ="/"> Blogosphere</Link>

        </h1>
        { path ==="/" && 
        <div onChange={(e) => setPrompt(e.target.value)} className=' flex justify-center items-center space-x-0'>
          <input className=' outline-none rounded-l-xl px-3 text-black bg-white' placeholder=' Search a Post ' type='text'/>
          <p onClick={()=> navigate(prompt ? "?Search"+ prompt : navigate("/"))} className=' cursor-pointer p-1 bg-white text-black rounded-r-xl'>
            <BsSearch/>
          </p>
        </div>

        }
      </div>
    </div>
  )
}

export default Navbar
