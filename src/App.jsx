import React from 'react'
import Carloan from './Carloan'
import carBg from './assets/carbg.jpg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <div className='w-full h-screen bg-cover bg-fixed'>
    <img src={carBg} alt="" className='object-cover w-full h-full '/>
         <Carloan />
         <ToastContainer />   
   </div>
    </>
  )
}

export default App
