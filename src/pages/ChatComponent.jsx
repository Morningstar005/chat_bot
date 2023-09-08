import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Page1 from "./Page1"
import Page3 from "./page3"
import Chatbot from './ChatbotMessager'
const ChatComponent = () => {
  const dispatch = useDispatch();
  const {step} = useSelector((state)=>state.chatbot)
  // console.log(step)
  return (
    <div className=''>
      {step===1 && <Page1/>}
      {step===2 && <Chatbot/>}
      {step===3 && <Page3/>}
    </div>
  )
}

export default ChatComponent