import React, { useEffect, useState } from 'react'
import { Qs } from '../API/qs';
import Accordian from './Accordian';

const AccordianList = () => {
    const [data,setData]=useState([]);


    useEffect(()=>{
        setData(Qs)
    })

  return (
    <div className='mx-auto mt-13'>
        {data.map((curElm)=>{
            return <Accordian key={curElm.id} curData = {curElm} />
        })}
        
        
    </div>
  )
}

export default AccordianList