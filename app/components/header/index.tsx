'use client'
import React from 'react'
import HamburgerIcon from './ham-icon';
import IconButton from '../icon-button';


const Header = () => {
  return (
    <header className="w-full h-min flex justify-between p-4 md:px-20 sticky border-gray-100 top-0 bg-gray/50 backdrop-blur-xl ">
      <span className="text-3xl font-bold">MD</span>
      <IconButton className='md:hidden' onClick={()=>alert("asd")}>
        <HamburgerIcon />
      </IconButton>
    </header>
  );
}

export default Header