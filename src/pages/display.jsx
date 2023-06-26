import React from 'react'
import { SideBar } from '../components/sidebar'
import { MenuBar } from '../components/menuBar'
import { Table } from '../components/table'
import { Link } from 'react-router-dom'
export const Display = () => {
  
  

  return (
    
  <>
    <div className="" >
      <SideBar />
      <MenuBar />
      <div className=' float-left w-[70%] my-14  flex flex-col items-center justify-center '>
      <div className=' w-[78%]'>
     <button className='bg-orange text-white w-[20%] h-[45px] rounded-md' type="submit"><Link to="/register"> Checkout</Link></button>
      </div>
      </div>
    
      <Table />
      </div>
      
  </>
  )
}
