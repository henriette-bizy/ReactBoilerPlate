import React from 'react'
import { useEffect, useState } from "react";
import { axiosInstance } from "../util/axios";

export const Table =() => {


  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const fetchData = async () => {
    try {
      // const res = await axios.get(`/user/?page=${currentPage}`);
     const res =  await axiosInstance.get(`/user/?page=${currentPage}&limit=3`)
     console.log(res.data.users);
      setData(res.data.users.docs);
      setTotalPages(res.data.users.totalPages);
      console.log(res.data.users.totalPages, currentPage);
      if (res.data.users.totalPages > currentPage) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(hasNext);
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className='w-[70%] h-[45vh] flex flex-row my-24 items-center justify-center float-left'>
          <table className="w-[78%] h-[46vh]">
  <thead>
    <tr className='bg-blue text-white'>
      <th class="p-3 tex-sm font-semibold tracking-wide text-left">FirstName</th>
      <th class="p-3 tex-sm font-semibold tracking-wide text-left">LastName</th>
      <th class="p-3 tex-sm font-semibold tracking-wide text-left">Email</th>
      <th class="p-3 tex-sm font-semibold tracking-wide text-left">Role</th>
    </tr>
  </thead>
  <tbody>
     {
      data && data.map((el)=>{
        return(
          <>
    <tr className='border-sm '>

           <td className="p-3 text-[14px] font-semibold">{el.firstName}</td>
           <td className="p-3 text-[14px] font-semibold">{el.lastName}</td>
           <td className="p-3 text-[14px] font-semibold">{el.email}</td>
           <td className="p-3 text-[14px] font-semibold">{el.role}</td> 
           </tr>


          </>
        )
      })
     }
  
  </tbody>
  <div className="my-8 flex flex-row justify-center gap-4 ">
          <button
            type='submig'
            className="py-2 px-4 border text-white rounded-md bg-blue"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="flex justify-center items-center font-bold text-blue-800 disabled:bg-lightgray">
            {currentPage} / {totalPages}
          </span>
          <button
            type='submit'
            className="py-2 px-4 border text-white rounded-md bg-blue  disabled:bg-lightgray"
            onClick={handleNext}
            disabled={!hasNext}
          >
            Next
          </button>
        </div>
  

  
</table>
    </div>
  )
}
