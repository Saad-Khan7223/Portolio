import React from 'react';
import web1 from './web1.png';
import web2 from './web2.png';
import web3 from './web3.png';
import web4 from './web4.png';
import web5 from './web5.png';
import web6 from './web6.png';
export default function Designs() {
  return (
    <div className='dark:bg-gray-900 text-white'>
    <div>
    <h3 className='text-3xl py-2 text-center text-black dark:text-white'>Create Custom Website As per Your Requirement</h3>
    <p className='text-md xl py-2 leading-8 text-teal-500 text-center'>Here some Custom Design Website for Reference</p>
  </div>
    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web1}
     alt='customWeb' />
    </div>
    </div>

    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web2}
    alt='customWeb' />
    </div>
    </div>

    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web3}
    alt='customWeb' />
    </div>
    </div>

    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web4}
    alt='customWeb' />
    </div>
    </div>

    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web5}
    alt='customWeb' />
    </div>
    </div>

    <div className="lg:flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="basis-1/3 flex-1 ">
    <img
    className="rounded-lg object-cover"
    width={'100%'}
    height={'100%'}
    layout="responsive"
    src={web6}
    alt='customWeb' />
    </div>
    </div>
    </div>
  )
}
