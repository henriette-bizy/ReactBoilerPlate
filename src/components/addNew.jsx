import React from 'react'

export const AddNew = () => {
  return (
    <div className=' float-left w-[70%] my-14  flex flex-col items-center justify-center '>
    <div className=' w-[78%]'>
<button className='bg-orange text-white w-[20%] h-[45px] rounded-md' type="submit" onClick={() => setIsFormOpen(true)}> Add New</button>  
    </div>
    </div>
  )
}
