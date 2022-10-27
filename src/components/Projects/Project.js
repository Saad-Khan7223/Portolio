import React from 'react'
import code from './code.png';
export default function Project() {
  return (
    <div className=' dark:bg-gray-900 text-white'>
    <div className='text-center shadow-lg p-10 rounded-xl m-10 '>
         <img className='ml-auto mr-auto' src={code} width={100} height={100} alt='logocode'/>
        <h3 className='text-lg pt-8 pb-2 text-black'>Website Development</h3>
            <p className='py-2 text-black'>
            Creating elegant Websites suited for your needs following core
            design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Expertise</h4>
            <p className='text-black py1'>Html</p>
            <p className='text-black py1'>CSS</p>
            <p className='text-black py1'>JavaScript</p>
            <p className='text-black py1'>ES6</p>
            <p className='text-black py1'>React</p>
            <p className='text-black py1'>Nodejs</p>
            <p className='text-black py1'>Express</p>
            <p className='text-black py1'>Mongodb</p>
            <p className='text-black py1'>SQL</p>
            <p className='text-black py1'>C++</p>
    </div>
   
    </div>
  )
}
