import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStep } from '../slices/chatbotSlice'

const Counter = () => {
    const [count,setCount] = useState(5)
    const dispatch = useDispatch()
    useEffect(()=>{
        const countdown = setInterval(()=>{
            if(count>0){
                setCount(count-1);
            }else{
                dispatch(setStep(3))
            }
        },1000);
        return ()=>clearInterval(countdown)
    })
  return (
    <div className=' left-[55px] bg-blue-200 w-[100%] h-[150px] text-center items-center justify-center  transition-all duration-200 rounded-md'>
        <p className="font-semibold text-[18px]">Redirecting to the dashboard in <span className="text-red-800 font-bold ">{count}</span>.............</p></div>
  )
}

export default Counter