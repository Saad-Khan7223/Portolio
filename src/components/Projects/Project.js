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
            <ul className= 'grid xsm:grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-10 sm:grid-cols-2 ml-10 mr-10'>
            <li className='text-black py1 font-extrabold dark:text-white'>Html</li>
            <li className='text-black py1 font-extrabold dark:text-white '>CSS</li>
            <li className='text-black py1 font-extrabold dark:text-white'>JavaScript</li>
            <li className='text-black py1 font-extrabold dark:text-white'>ES6</li>
            <li className='text-black py1 font-extrabold dark:text-white'>React</li>
            <li className='text-black py1 font-extrabold dark:text-white'>Nodejs</li>
            <li className='text-black py1 font-extrabold dark:text-white'>Express</li>
            <li className='text-black py1 font-extrabold  dark:text-white'>Mongodb</li>
            <li className='text-black py1 font-extrabold dark:text-white'>SQL</li>
            <li className='text-black py1 font-extrabold dark:text-white'>C++</li>
            </ul>
    </div>
   
    </div>
  )
}
