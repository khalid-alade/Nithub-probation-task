import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './Navbar';
import { useContext } from "react";
import { ThemeContext } from '../ThemeContext';


const Table = lazy(() => import('./Table'));

export default function MainPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [data, setdata] = useState([]);

  return (
    <div className='flex items-right justify-end w-screen min-h-screen'>
      <div className='bg-gray-100 w-full lg:w-4/5 min-h-screen dark:bg-gray-900'>
        <Navbar />
        <div className='pt-4 pb-10 px-8 dark:text-white'>
          <p className='text-2xl font-semibold'>Shipments</p>
          <p>Track the company's shipments here</p>


          <Suspense fallback={<div className='text-[3000px]'>Loading...</div>}>
            <Table />
          </Suspense>


        </div>
      </div>
    </div >
  );
}
