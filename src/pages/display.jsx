import React from 'react'
import { SideBar } from '../components/sidebar'
import { MenuBar } from '../components/menuBar'
import { Table } from '../components/table'
import { AddNew } from '../components/addNew'
import { PopComponent } from './popComponent'
import { useState } from 'react'
import { isObject } from 'formik'

export const Display = () => {
  
  const [isPopOpen, setIsPopOpen] = useState(false);

  return (
    
  <>
    <div className={`${isPopOpen && "opacity-[50%]"}`} >
      <SideBar />
      <MenuBar />
      <div className=' float-left w-[70%] my-14  flex flex-col items-center justify-center '>
      <div className=' w-[78%]'>
     <button className='bg-orange text-white w-[20%] h-[45px] rounded-md' type="submit" onClick={() => setIsPopOpen(true)}> Add New</button>
      </div>
      </div>
    
      <Table />
      </div>
      {isPopOpen && <PopComponent onClose={() => setIsPopOpen(false)} />}
  </>
  )
}
