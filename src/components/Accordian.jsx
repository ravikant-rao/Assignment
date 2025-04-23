import React, { useState } from 'react'

const Accordian = ({curData}) => {
    const {question,answer} = curData;
        const [showDetail, setShowDetail] = useState(false);
    function handeleClick(){
      setShowDetail(!showDetail);
    }

  return (
    <div className='w-158 bg-emerald-100 mb-2 py-3 border-l-2 border-gray-400 rounded-sm'>
       
            <div className='flex justify-between items-center  px-5 '>
                <h1>{question}</h1>
                <button onClick={handeleClick} className='bg-purple-500 px-3 py-0.5 rounded-sm cursor-pointer text-white'>{showDetail ? "Hide" :"Show" } </button>
            </div>
           {showDetail &&  <p className='px-5 text-sm pt-2'>{answer}</p> }
        
    </div>
  )
}

export default Accordian