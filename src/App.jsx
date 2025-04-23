import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { HambergProvider } from './context';


function App() {

  return (
    <>
      <HambergProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </HambergProvider>
    </>
  )
}

export default App;
