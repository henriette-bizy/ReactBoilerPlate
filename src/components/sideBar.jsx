import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
    
  return (
    <div className='w-[18%] bg-blue h-[100vh] float-left'>
        <div className='w-full flex flex-col h-[55vh] items-center justify-center'>
        <div>
        {/* <h2 className='text-orange'>Arms</h2> */}
        </div>

        <div className=''>

           <ul>
            
            <li className='w-[75%] mx-auto flex flex-row h-16 items-center justify-center hover:bg-white hover:w-full'>
                <div className='w-16'>
                <img src={'/images/bxs_dashboard.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Dashboard</p>
                 </div>
            
                </li>
                <li className='w-[75%] mx-auto flex flex-row h-16 items-center justify-center hover:bg-white hover:w-full'>
                <div className='w-16'>
                <img src={'/images/bxs_dashboard.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Dashboard</p>
                 </div>
            
                </li>
                <li className='w-[75%] mx-auto flex flex-row h-16 items-center justify-center hover:bg-white hover:w-full'>
                <div className='w-16'>
                <img src={'/images/bxs_dashboard.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Dashboard</p>
                 </div>
            
                </li>
            
           </ul>

        </div>
    </div>
    </div>
  )
}
