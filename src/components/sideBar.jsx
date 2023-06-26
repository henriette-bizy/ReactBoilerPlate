import React from 'react'
import { NavLink , useLocation } from 'react-router-dom'

export const SideBar = () => {

   const location = useLocation();
    
  return (
    <div className='w-[18%] bg-blue h-[100vh] float-left'>
        <div className='w-full flex flex-col h-[63vh]  justify-center'>
        <div>
        {/* <h2 className='text-orange'>Arms</h2> */}
        </div>

        <div className=''>

           <ul className='w-full'>
            
            <li className=''>
              <NavLink to="/dashboard" className={`w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor ${location.pathname == '/dashboard' && 'bg-hoverColor'}`} >
                <div className='w-16'>
                <img src={'/images/bxs_dashboard.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Dashboard</p>
                 </div>
              </NavLink>
            
                </li>
                <li className='w-[100%] mx-auto flex flex-row my-5 h-[45px] items-center justify-center hover:bg-hoverColor '>
                <NavLink to="/users" className={`w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor ${location.pathname == '/users' && 'bg-hoverColor'}`}>
                <div className='w-16'>
                <img src={'/images/users.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>Products</p>
                 </div>
                </NavLink>
                </li>
                <li className='w-[100%] mx-auto flex flex-row my-5 h-[45px] items-center justify-center hover:bg-hoverColor '>
                <NavLink to="/users" className={`w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor ${location.pathname == '/mycart' && 'bg-hoverColor'}`}>
                <div className='w-16'>
                <img src={'/images/users.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>My cart</p>
                 </div>
                </NavLink>
                </li>
                <li className='w-[100%] mx-auto flex flex-row my-5 h-[45px] items-center justify-center hover:bg-hoverColor '>
                <NavLink to="/users" className={`w-[100%] mx-auto flex flex-row my-5 h-[45px]  items-center justify-center  hover:bg-hoverColor ${location.pathname == '/report' && 'bg-hoverColor'}`}>
                <div className='w-16'>
                <img src={'/images/users.png'} className='w-[32px] h-[32px]'></img>
                </div>
                <div className='w-28'>
                 <p className='text-[15px] text-white'>My Report</p>
                 </div>
                </NavLink>
                </li>
            
           </ul>

        </div>
    </div>
    </div>
  )
}
