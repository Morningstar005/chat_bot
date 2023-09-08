import React from 'react'
import {FiLogOut} from "react-icons/fi"
import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] bg-white'>
      <div className='flex w-11/12 max-w-maxContent' >
       <Link to={"/"}>
       <img src={`https://www.happilyever.co/static/media/newLogo.aa017d5297ade31296050058d61d207d.svg`} alt="logo" />
       </Link>
      </div>
      <div className='text-[1.25rem] font-bold '>
        <FiLogOut/>
      </div>
    </div>
  )
}

export default Navbar