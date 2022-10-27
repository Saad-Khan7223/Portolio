import React from 'react'
import code from './code.png';
export default function Project() {
  return (
    <div className=' dark:bg-gray-900 dark:text-white'>
    <div className='text-center shadow-lg p-10 rounded-xl m-10 '>
         <img className='ml-auto mr-auto' src={code} width={100} height={100} alt='logocode'/>
        <h3 className='text-lg pt-8 pb-2 text-black dark:text-white'>Website Development</h3>
            <p className='py-2 text-black dark:text-white'>
            Creating elegant Websites suited for your needs following core
            design theory.
            </p>
            <h4 className='py-4 text-2xl text-teal-600'>Expertise</h4>
            <p className='text-black py1 dark:text-white'>Html</p>
            <p className='text-black py1 dark:text-white'>CSS</p>
            <p className='text-black py1 dark:text-white'>JavaScript</p>
            <p className='text-black py1 dark:text-white'>ES6</p>
            <p className='text-black py1 dark:text-white'>React</p>
            <p className='text-black py1 dark:text-white'>Nodejs</p>
            <p className='text-black py1 dark:text-white'>Express</p>
            <p className='text-black py1 dark:text-white'>Mongodb</p>
            <p className='text-black py1 dark:text-white'>SQL</p>
            <p className='text-black py1 dark:text-white'>C++</p>
    </div>
   
    </div>
  )
}
