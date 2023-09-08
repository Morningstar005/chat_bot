import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge, setName } from "../slices/chatbotSlice";

const Age = (props) => {
  const [selectedAge, setSelectedAge] = useState("");
  const dispatch = useDispatch();

  const handleAgeChange = (event) => {
    const age = event.target.value;
    setSelectedAge(age); 
    dispatch(setAge(age));
    dispatch(setName(localStorage.getItem("name")));
    props.actionProvider.PrintAge(age);
  };

  return (
    <div className=' bg-gray-600 mx-[3.75rem] text-center md:w-[5%] w-[20%] rounded-lg -mt-2 hover:text-black transition-all duration-200 hover:bg-slate-400 hover:text-black"'>
      <select value={selectedAge} onChange={handleAgeChange} className="bg-gray-600 text-white hover:bg-slate-400 hover:text-black transition-all duration-200 rounded-lg">
        <option value="">Select</option>
        {Array.from({ length: 23 }, (_, i) => 18 + i).map((age) => (
          <option value={age} key={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Age;
