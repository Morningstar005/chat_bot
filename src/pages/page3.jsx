import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsFillStopwatchFill} from "react-icons/bs"
import {HiLocationMarker } from "react-icons/hi"
import {MdPeopleAlt} from "react-icons/md"
import {AiFillPlusCircle} from "react-icons/ai"
import { setStep } from '../slices/chatbotSlice'

const page3 = () => {
  const dispatch = useDispatch()

    const {age,name} = useSelector((state)=>state.chatbot)
    const handleAdd =()=>{
      dispatch(setStep(2))
    }
  return (
   <div>
     <div className='flex flex-col items-center bg-slate-100 md:mx-[5.50rem] mx-[1rem] h-[20rem] md:my-[17.75rem] my-[10rem] rounded-md p-[.75rem]'>
        <div className=''>
          <p className='text-[18px] font-bold text-blue-500'>Session schedule Successfully</p>

        </div>
        <div className='my-[1.25rem] flex flex-col relative text-start w-[80%] h-[80%] justify-around px-2'>
        <div className='flex items-center gap-x-2 '>
          <MdPeopleAlt className='text-[30px]'/>
          <p className='font-semibold md:text-[16px] text-[16px] '>Your name {name}, Aged {age} has been added to student system. you may now exit.</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <BsFillStopwatchFill/>
          <p className='font-semibold text-[16px] font-mono'>16 september 2023, Saturday,11:30AM</p>
        </div>
        <div className='flex items-center gap-2'>
          <HiLocationMarker/>
          <p className='font-semibold text-[16px] font-mono text-blue-500'>Open in map</p>
        </div>
        </div>

        <div className="bg-slate-600 px-2 py-1 rounded-lg" onClick={handleAdd}>
        <AiFillPlusCircle  className='text-white text-center text-[20px]'/>

        </div>
    </div>


        
   </div>
  )
}

export default page3