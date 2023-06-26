import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../util/axios';
import auth from '../util/storage';
import { Link } from 'react-router-dom';

export const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = auth.getToken();
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const res = await axiosInstance.get('/products');
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[79%] h-[45vh] flex flex-col items-center justify-center">
      <table className="w-[80%] h-[46vh]">
        <thead>
          <tr className="bg-blue text-white">
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">Code</th>
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">Name</th>
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">Product Type</th>
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">Price</th>
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">In Date</th>
            <th className="p-3 tex-sm font-semibold tracking-wide text-left">Buy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code} className="border-sm">
              <td className="p-1 text-[14px] font-semibold">{item.code}</td>
              <td className="p-3 text-[14px] font-semibold">{item.name}</td>
              <td className="p-3 text-[14px] font-semibold">{item.productType}</td>
              <td className="p-3 text-[14px] font-semibold">{item.price}</td>
              <td className="p-3 text-[14px] font-semibold">{item.inDate}</td>
              <td className="p-3 text-[14px] font-semibold">
              <Link to={`/mycart?product=${item.name}&price=${item.price}&code=${item.code}`}>Add to Cart</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
