import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { setDateTime } from "../slices/chatbotSlice";
import { useDispatch, useSelector } from "react-redux";
import "../pages/Chatbot.css"
const AlotmentSetting = (props) => {
    const dispatch = useDispatch()
const [values,setValue] = useState("")


useEffect(()=>{
 if(values===""){

 }else{
  handleDateChange()
 }
},[values])
const handleDateChange = () => {

    setValue(values)

    props.actionProvider.datetime(values)
  };
  return (
    <div>
      <DateTimePicker value={values} onChange={setValue}/>
    </div>
  );
};

export default AlotmentSetting;
