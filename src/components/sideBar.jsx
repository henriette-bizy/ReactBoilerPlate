import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {


    
  return (
    <div className='w-[18%] bg-blue h-[100vh] float-left'>
        <div className='w-full flex flex-col h-[63vh]  justify-center'>
        <div>
        {/* <h2 className='text-orange'>Arms</h2> */}
        </div>

        <div className=''>

           <ul className='w-full'>
            
            <li className=''>
              <NavLink to="/dashboard" className="w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor" >
                <div className='w-16'>
                <img src={'/images/bxs_dashboard.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Dashboard</p>
                 </div>
              </NavLink>
            
                </li>
                <li className='w-[100%] mx-auto flex flex-row my-5 h-[45px] items-center justify-center hover:bg-hoverColor '>
                <NavLink to="/users" className="w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor" >
                <div className='w-16'>
                <img src={'/images/users.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Users</p>
                 </div>
                </NavLink>
                </li>
                <li className='w-[100%] mx-auto flex flex-row my-5 h-[45px] items-center justify-center hover:bg-hoverColor '>
                <div className='w-16'>
                <img src={'/images/charts.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Products</p>
                 </div>
            
                </li>
            
           </ul>

        </div>
    </div>
    </div>
  )
}
