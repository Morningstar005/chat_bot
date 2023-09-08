import React from 'react'

const Gotit = (props) => {
    const GotitClick=()=>{
        props.actionProvider.handleGotit()
    }
  return (
    <div className=' mx-[3.75rem] text-center md:w-[5%] w-[20%] rounded-lg -mt-2 bg-gray-700 text-white hover:bg-gray-100 hover:text-black transition-all duration-200 '>
        <button onClick={GotitClick}>
            Got it
        </button>
    </div>
  )
}

export default Gotit