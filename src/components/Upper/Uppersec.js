import React from 'react';
import {
    AiFillMail,
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";
  import deved from './dev-ed-wave.png';
export default function Uppersec() {
  return (
    <div className='dark:bg-gray-900 text-white'>
    <div className='text-center p-10'>
     <h2 className='text-4xl py-2 text-teal-600 font-medium'>Muhammad Saad Khan</h2>
     <h3 className='text-2xl py-2'>MernStack Developer</h3> 
     <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Electronic Engineer From SSUET MernStack Developer Freelancer providing services for programming. Join me down below and let's get cracking!
     </p>
     </div>
     <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
     <a href='https://www.linkedin.com/in/muhammad-saad-khan-1696421bb' target={'blank'}><AiFillLinkedin/></a>
     <a href='https://github.com/Saad-Khan7223' target={'blank'}><AiFillGithub/></a>
     <a href='mailto:msaadk7223@gmail.com' target={'blank'}><AiFillMail/></a>
     </div>
     <div  className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
     <img src={deved} alt='Icon'/>
     </div>
    </div>
  )
}
