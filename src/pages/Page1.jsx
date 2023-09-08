import React from 'react'
import { useDispatch } from 'react-redux'
import {AiOutlineUser} from "react-icons/ai"
import { setStep } from '../slices/chatbotSlice'

const Page1 = () => {
    const dispatch = useDispatch()
    const onClickEnrolled =()=>{
        dispatch(setStep(2))
    }
  return (
    <div className=' relative flex flex-col justify-center items-center bg-blue-200'>
      <div className='flex flex-row   w-11/12 h-[9rem] justify-between items-center'>
    
      <div>
      <p className='text-[16px] font-bold text-blue-700 mb-2'>
          Welcome to Happilyever!
        </p>
        <p className='font-bold text-[16px]'>
          Good Morning
        </p>
      </div>
   
      <div className='px-4 bg-white py-4 rounded-full'>
        <AiOutlineUser className='text-[20px]'/>
      </div>
      </div>
      <div className='md:h-[1080px] h-[50rem] bg-white w-[100%] text-center py-[9rem] md:py-[15rem] border '>

        <h2 className='text-[20px] font-bold  md:mx-[19rem] mx-[2rem] md:py-[4rem] py-[2rem] rounded-md bg-blue-100 mb-5 border border-black overflow-hidden'>
        Enter into Student Info System
        </h2>
        <button onClick={onClickEnrolled}
        className='border border-slate-300 p-2 rounded-md bg-blue-100 hover:bg-blue-500 hover:text-white transition-all duration-200'>
            Enroll Now
        </button>
      </div>
    </div>
  )
}

export default Page1