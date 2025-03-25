import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Moon, Heart, ShoppingBag, User, Sparkles, ShieldCheck, Cpu  } from "lucide-react";


const Home = () => {
  const styles = [
    { gradient: "bg-gradient-to-r from-blue-400 to-blue-600", label: "Streetwear" },
    { gradient: "bg-gradient-to-r from-green-400 to-green-600", label: "Chic & Elegant" },
    { gradient: "bg-gradient-to-r from-orange-400 to-red-600", label: "Casual Vibes" },
  ];
  
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
      <section
  className="h-screen relative flex items-center justify-center bg-black text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/shopping3.jpg')",
    backgroundPosition: "top center", // Moves image upward
    backgroundSize: "cover",
  }}
>
  {/* Dark Overlay for better contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="text-center relative z-10"
  >
    <h1 className="text-6xl font-bold mb-4">Welcome to ZUDIO</h1>
    <p className="text-xl mb-8">Fashion at Star Prices</p>
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
  {/* Animated Background Gradient */}
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30"
  ></motion.div>

  {/* Heading & Subtitle */}
  <div className="relative text-center">
    <h2 className="text-4xl font-bold mb-6">Trending Styles</h2>
    <p className="max-w-xl mx-auto text-lg">Stay ahead of the fashion curve.</p>
  </div>

  {/* Grid with Images & Gradient */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4 relative">
    {[
      { 
        src: "/images/streetwear.jpg", 
        label: "Streetwear", 
        
        gradient: "bg-gradient-to-t from-gray-900 to-transparent" 
      },
      { 
        src: "/images/ele1.jpg", 
        label: "Chic & Elegant",
        gradient: "bg-gradient-to-t from-gray-900 to-transparent" 
      },
      { 
        src: "/images/casual.jpg", 
        label: "Casual Vibes", 
        gradient: "bg-gradient-to-t from-gray-900 to-transparent" 
      },
    ].map((item, index) => (
      <div key={index} className="relative group h-64 rounded-lg shadow-lg overflow-hidden">
        {/* Background Image */}
        <img 
          src={item.src} 
          alt={item.label} 
          className="w-full h-full object-cover" 
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${item.gradient} opacity-50 group-hover:opacity-75 transition`}></div>

        {/* Label on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="text-white font-semibold text-lg">{item.label}</span>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Exclusive Collection */}
      <section className="py-20 relative bg-gray-900 text-white">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-l from-blue-600 via-indigo-500 to-purple-700 opacity-20"
      ></motion.div>

      {/* Heading & Subtitle */}
      <div className="relative text-center">
        <h2 className="text-4xl font-bold mb-6">Exclusive Collection</h2>
        <p className="max-w-xl mx-auto text-lg">Limited edition styles just for you.</p>
      </div>

      {/* Animated Stats Section */}
      <div className="relative flex flex-wrap justify-center gap-12 mt-12">
        {[
          { number: "50+", label: "Exclusive Designs" },
          { number: "10K+", label: "Happy Customers" },
          { number: "24/7", label: "Customer Support" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="text-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-bold">{item.number}</h3>
            <p className="text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Product Card */}
      <div className="relative flex justify-center mt-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-500 p-8 rounded-xl shadow-xl max-w-sm text-center"
        >
          <h3 className="text-2xl font-bold">Limited Edition Drop</h3>
          <p className="mt-2 text-gray-200">Only 100 pieces available worldwide.</p>
          <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-md transition hover:bg-gray-300">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>

      {/* Future of Fashion */}
      <section className="py-20 relative bg-gray-100 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-green-400 via-teal-500 to-blue-600 opacity-30"
      ></motion.div>

      {/* Heading & Subtitle */}
      <div className="relative text-center">
        <h2 className="text-4xl font-bold mb-6">Future of Fashion</h2>
        <p className="max-w-xl mx-auto text-lg">
          Tech meets style in futuristic designs.
        </p>
      </div>

      {/* Icon Features Section */}
      <div className="relative flex flex-wrap justify-center gap-12 mt-12">
        {[
          { icon: <Cpu size={40} />, label: "Smart Fabrics", desc: "Adaptive, temperature-controlled materials." },
          { icon: <Sparkles size={40} />, label: "Augmented Reality", desc: "Virtual try-ons with AR tech." },
          { icon: <ShieldCheck size={40} />, label: "Sustainable Innovation", desc: "Eco-friendly & recycled designs." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md max-w-xs"
          >
            <div className="text-teal-600">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{item.label}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Futuristic Fashion Showcase */}
      <div className="relative flex justify-center mt-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-600 to-teal-400 p-8 rounded-xl shadow-xl max-w-sm text-center text-white"
        >
          <h3 className="text-2xl font-bold">The Next-Gen Collection</h3>
          <p className="mt-2">Experience AI-integrated clothing & futuristic streetwear.</p>
          <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-md transition hover:bg-gray-300">
            Discover More
          </button>
        </motion.div>
      </div>
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
