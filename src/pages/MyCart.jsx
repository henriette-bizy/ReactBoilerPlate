import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuBar } from '../components/menuBar';
import { SideBar } from '../components/sidebar';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../util/axios';

export const MyCart = () => {
  const location = useLocation();
  const productName = new URLSearchParams(location.search).get('product');
  const productPrice = new URLSearchParams(location.search).get('price');
  const productCode = new URLSearchParams(location.search).get('code');
  console.log(productCode);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());

  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const newItem = {
      productName: productName,
      productCode: productCode,
      quantity: quantity,
      price: quantity * productPrice,
      addedDate: selectedDate,
    };

    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log('Product added to cart!');
  };

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    setQuantity(parseInt(value));
  };

  const handleCheckout = () => {
    cartItems.forEach((item) => {
        const purchasedDTO = {
          productCode: item.productCode,
          quantity: item.quantity,
          total: item.price,
          date: item.addedDate,
        };
    
   

    axiosInstance.post('/purchased', purchasedDTO)
        .then((response) => {
            console.log('Item saved to the database:', response.data);
            })
        .catch((error) => {
            console.error('Error saving item to the database:', error);
            });
        });

    
      // Clear the cart after saving the items
      setCartItems([]);
      localStorage.removeItem('cartItems');
    
      navigate('/dashboard');
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <SideBar />
      <MenuBar />

      <div className="w-[70%] h-[45vh] flex flex-col items-center pt-10">
        <div className="bg-white p-4 shadow-md rounded-md w-[50%]">
          <div className="flex flex-row">
            <h2 className="text-lg font-medium mb-2 w-1/2">Product Name:</h2>
            <p className="text-blue w-1/2">{productName}</p>
          </div>

          <div className="flex flex-row">
            <h2 className="text-lg font-medium mt-4 mb-2 w-[50%]">Operation:</h2>
            <select className="border border-gray-300 p-2 rounded-md focus:outline-none w-[40%]">
              <option value="increase">Increase</option>
              <option value="decrease">Decrease</option>
            </select>
          </div>

          <div className="flex flex-row">
            <h2 className="text-lg font-medium mt-4 mb-2 w-[50%]">Quantity:</h2>
            <input
              type="number"
              className="border border-gray-300 p-2 rounded-md focus:outline-none w-[40%]"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="flex flex-row">
            <h2 className="text-lg font-medium mt-4 mb-2 w-[50%]">Date:</h2>
            <h1 className="text-blue w-[50%] mt-4 mb-2">{selectedDate}</h1>
          </div>

          <button
            className="bg-orange text-white py-2 px-4 rounded-md mt-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-2">Cart Items:</h2>
          <table className="border-collapse">
            <thead>
              <tr className="bg-blue text-white">
                <th className="p-3 text-sm font-semibold">Product Name</th>
                <th className="p-3 text-sm font-semibold">Product Code</th>
                <th className="p-3 text-sm font-semibold">Quantity</th>
                <th className="p-3 text-sm font-semibold">Price</th>
                <th className="p-3 text-sm font-semibold">Added Date</th>
                
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-sm">
                  <td className="p-3 text-[14px]  font-semibold">{item.productName}</td>
                  <td className="p-3 text-[14px] font-semibold">{item.productCode}</td>
                  <td className="p-3 text-[14px] font-semibold">{item.quantity}</td>
                  <td className="p-3 text-[14px] font-semibold">{item.price}</td>
                  <td className="p-3 text-[14px] font-semibold">{item.addedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-orange text-white py-2 px-4 rounded-md mt-4"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
