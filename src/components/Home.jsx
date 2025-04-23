import React, { useContext } from 'react'
import { HambergContext } from '../context';
import SideBar from './SideBar';
import AccordianList from './AccordianList';

const Home = () => {
    const {showSidebar} = useContext(HambergContext);
   
    
  return (
    <div className=' flex'>
        {showSidebar && <SideBar/> }
        <AccordianList/>
    </div>
  ) 
}

export default Home