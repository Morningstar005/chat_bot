import {combineReducers} from "@reduxjs/toolkit"
import  chatbotReducer from "../slices/chatbotSlice"

const rootReducer = combineReducers({
    chatbot: chatbotReducer,
})

export default rootReducer