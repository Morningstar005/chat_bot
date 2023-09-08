import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step:1,
    name:"",
    age:"",
    datetime:"",
    studentinfo:[]
}

const chatbotSlice = createSlice({
    name:"chatbot_steps",
    initialState,
    reducers:{
        setStep:(state,action)=>{
            state.step = action.payload
        },
        setName:(state,action)=>{
            state.name=action.payload
        },
        setAge:(state,action)=>{
            state.age=action.payload
        },
        setStudentinfo:(state,action)=>{
            state.studentinfo=action.payload
        },
        setDateTime:(state,action)=>{
            state.datetime=action.payload
        }
    }
})



export const {
    setStep,
    setName,
    setAge,
    setStudentinfo,
    setDateTime,
}=chatbotSlice.actions

export default chatbotSlice.reducer