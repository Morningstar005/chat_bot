import React from 'react'
import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css";
import config from "../bot/config"
import MessageParser from "../bot/Messageparser"
import ActionProvider from "../bot/ActionProvider"
import "./Chatbot.css"
// import config from "../"
const ChatbotMessager = () => {
  return (
    <div >
      <Chatbot 
       config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatbotMessager