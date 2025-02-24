import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { ThemeContext } from '../ThemeContext';
import { FiSun, FiMoon } from "react-icons/fi";
import avatar from '../assets/avatar.png'

export default function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className='mt-9 dark:text-white flex items-center justify-end pr-8'>

      {/* <p onClick={toggleTheme} className='text-right pr-6 py-2 cursor-pointer'>Sun</p> */}
      {theme == 'light' ?
        <FiMoon size={28} className='cursor-pointer hover:fill-slate-300' onClick={toggleTheme} data-testid="theme-toggle" />
        :
        <FiSun size={28} className='cursor-pointer hover:fill-slate-500' onClick={toggleTheme} data-testid="sun-icon"/>
      }

    <img className='ml-6' src={avatar} alt="profile avatar" /> 

    </div>
  );
}
