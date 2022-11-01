import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState,useEffect } from "react";
export default function Nav() {
  const [theme , Settheme]= useState('');
  useEffect(()=>{
    if(theme==='dark'){
    document.documentElement.classList.add('dark');
    console.log('darkmode')
  }
  else{
    document.documentElement.classList.remove('dark')
    console.log('lightmode')
  }
  },[theme])
  const handlerThemeSwitch=()=>{
      Settheme(`${theme==='dark'? '':'dark'}`)
  }
  return (
    <div className='dark:bg-gray-900 text-white'>
    <nav className="py-10 mb-12 flex justify-between">
    <h1 className="text-xl text-gray-800 dark:text-white ml-4 ">DevelopedBySaad</h1>
    <ul className="flex items-center">
    <li>
   <button onClick={handlerThemeSwitch}><BsFillMoonStarsFill  className="cursor-pointer text-black dark:text-white text-2xl"/></button>
    </li>
    <li>
    <p className="bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer text-white px-4 py-2 rounded-md ml-4 mr-4">SK-Creation</p>
    </li>
    </ul>
    </nav>
    </div>
  )
}
