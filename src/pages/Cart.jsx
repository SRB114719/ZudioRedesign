import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Striped Cotton T-shirt',
      price: 599,
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quantity: 1,
      size: 'M',
      color: 'Blue'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 h-full w-full max-w-md bg-white p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Shopping Cart</h2>
          <Link to="/" className="p-2 text-gray-400 hover:text-gray-500">
            <FiX className="h-6 w-6" />
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Your cart is empty</p>
            <Link to="/shop" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="ml-4">₹{item.price.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.color} | {item.size}
                    </p>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        <FiMinus className="h-4 w-4" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        <FiPlus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-sm text-rose-600 hover:text-rose-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-black text-white text-center py-3 rounded hover:bg-gray-800"
              >
                Login to continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;