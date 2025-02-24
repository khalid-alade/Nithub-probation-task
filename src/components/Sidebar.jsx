import React from 'react';
import { FaTruck, FaUser, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='hidden lg:block w-1/5 bg-white pt-9 px-6 fixed h-screen dark:bg-indigo-950'>
      <p className='font-bold text-xl mb-8 dark:text-white cursor-pointer'>Logistics Manager</p>
      <div className='flex flex-col items-center justify-start'>
        <div className='w-full mb-3'>
          <p className='font-semibold text-sm text-gray-400'>primary</p>
        </div>
        <button className='bg-blue-600 w-full rounded-full text-white py-2 flex items-center justify-start px-4'>
          <FaTruck size={26}/> <p className='ml-3'> Shipments</p></button>
          
          <button disabled className='w-full mt-4 text-black py-2 flex items-center justify-start px-4 dark:text-white'>
          <FaUser size={26}/> <p className='ml-3'> Employees</p></button>

          <button disabled className='w-full mt-4 text-black py-2 flex items-center justify-start px-4 dark:text-white'>
          <FaUsers size={26}/> <p className='ml-3'> Customers</p></button>
      </div>
    </div>
  );
}