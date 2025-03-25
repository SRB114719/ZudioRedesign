import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Moon, Heart, ShoppingBag, User } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white text-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">ZUDIO</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/home" className="hover:text-gray-500">Home</Link>
              <Link to="/shop" className="hover:text-gray-500">Shop</Link>
              <Link to="/about" className="hover:text-gray-500">About</Link>
              <Link to="/contact" className="hover:text-gray-500">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 rounded-full hover:bg-gray-100">
                <Sun size={20} />
              </button> */}
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 relative">
                <ShoppingBag size={20} />
              </Link>
              <Link to="/login" className="p-2 rounded-full hover:bg-gray-100">
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Welcome to ZUDIO</h1>
          <p className="text-xl mb-8">Fashion at Star prices</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Trending Styles Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30"
        ></motion.div>
        <h2 className="text-4xl font-bold mb-12 text-center">Trending Styles</h2>
        <p className="max-w-xl mx-auto text-center text-lg">Stay ahead of the fashion curve.</p>
      </section>

      {/* Exclusive Collection */}
      <section className="py-20 relative bg-gray-900 text-white">
        <motion.div
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-l from-blue-600 via-indigo-500 to-purple-700 opacity-20"
        ></motion.div>
        <h2 className="text-4xl font-bold mb-12 text-center">Exclusive Collection</h2>
        <p className="max-w-xl mx-auto text-center text-lg">Limited edition styles just for you.</p>
      </section>

      {/* Future of Fashion */}
      <section className="py-20 relative bg-gray-100">
        <motion.div
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-green-400 via-teal-500 to-blue-600 opacity-30"
        ></motion.div>
        <h2 className="text-4xl font-bold mb-12 text-center">Future of Fashion</h2>
        <p className="max-w-xl mx-auto text-center text-lg">Tech meets style in futuristic designs.</p>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea required rows={4} className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-white text-center">
        &copy; {new Date().getFullYear()} FASHION HUB. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
