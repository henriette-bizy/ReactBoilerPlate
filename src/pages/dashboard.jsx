import React from 'react'
import { SideBar } from '../components/sidebar'
import { MenuBar } from '../components/menuBar'
import { FlexBox } from '../components/flexBox'
import { RightBar } from '../components/rightBar'
import { Chart } from '../components/chart'


export const Dashboard = () => {
  return (
    <div className=''>
    {/* <div className='float-left'> */}
   <SideBar />
   {/* </div> */}
   {/* <div className='float-right'> */}
     <MenuBar/>
     
   {/* </div> */}
   <FlexBox />
   <RightBar />
   <Chart />
   
   

    </div>

  )
}
