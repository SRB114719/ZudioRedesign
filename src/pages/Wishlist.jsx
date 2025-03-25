import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiX, FiMove } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Sun, Heart, ShoppingCart, User } from 'lucide-react';

// Sample wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Premium Cotton Shirt",
    price: 1999,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    size: "M",
    color: "Blue",
    inStock: true
  },
  {
    id: 2,
    name: "Slim Fit Denim Jacket",
    price: 3499,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    size: "L",
    color: "Black",
    inStock: true
  },
  {
    id: 3,
    name: "Urban Street Sneakers",
    price: 2799,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    size: "9",
    color: "White",
    inStock: false
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Add to cart with animation
  const addToCart = (id) => {
    const item = wishlistItems.find(item => item.id === id);
    // Here you would add to cart logic
    console.log('Added to cart:', item);
    
    // Animation for moving to cart
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Drag and drop handlers
  const handleDragStart = (e, position) => {
    setDraggedItem(position);
  };

  const handleDragEnter = (e, position) => {
    setDragOverItem(position);
  };

  const handleDragEnd = () => {
    if (draggedItem !== null && dragOverItem !== null && draggedItem !== dragOverItem) {
      const items = [...wishlistItems];
      const draggedItemContent = items[draggedItem];
      items.splice(draggedItem, 1);
      items.splice(dragOverItem, 0, draggedItemContent);
      setWishlistItems(items);
    }
    setDraggedItem(null);
    setDragOverItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Consistent with other pages */}
      <nav className="fixed w-full top-0 z-50 bg-white text-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">ZUDIO</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/home" className="hover:text-gray-500">Home</Link>
              <Link to="/shop" className="hover:text-gray-500">Shop</Link>
              {/* <Link to="/collections" className="hover:text-gray-500">Collections</Link> */}
              <Link to="/about" className="hover:text-gray-500">About</Link>
              <Link to="/contact" className="hover:text-gray-500">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 rounded-full hover:bg-gray-100">
                <Sun size={20} />
              </button> */}
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100 text-black">
                <Heart size={20} fill="currentColor" />
              </Link>
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <ShoppingCart size={20} />
              </button>
              <Link to="/login" className="p-2 rounded-full hover:bg-gray-100">
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items</p>
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <FiHeart className="text-gray-400 text-3xl" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save your favorite items here for later</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        )}

        {/* Wishlist Items Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
                className={`relative bg-white rounded-xl shadow-md overflow-hidden group ${
                  draggedItem === index ? "opacity-50" : ""
                } ${dragOverItem === index ? "ring-2 ring-indigo-500" : ""}`}
              >
                {/* Drag handle */}
                <div className="absolute top-3 left-3 z-10 p-2 bg-white rounded-full shadow-md cursor-move">
                  <FiMove className="text-gray-500" />
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <FiX className="text-gray-500 hover:text-red-500" />
                </button>

                {/* Product image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium bg-red-500 px-3 py-1 rounded-full text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product details */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                  
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-500">{item.size}</span>
                      <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: item.color.toLowerCase() }}></span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={`w-full flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                      item.inStock
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <FiShoppingBag />
                    <span>{item.inStock ? "Add to Bag" : "Notify Me"}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Continue Shopping */}
        {wishlistItems.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Continue Shopping</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;