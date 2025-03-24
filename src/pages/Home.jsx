import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon, Heart, ShoppingCart, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">ZUDIO</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="hover:text-gray-500">Shop</Link>
              <Link to="/collections" className="hover:text-gray-500">Collections</Link>
              <Link to="/about" className="hover:text-gray-500">About</Link>
              <Link to="/contact" className="hover:text-gray-500">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Sun size={20} />
              </button>
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100">
                <Heart size={20} />
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

      {/* Hero Section with 3D Model */}
      <section className="h-screen relative pt-16">
        <div className="absolute inset-0">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Welcome to ZUDIO</h1>
            <p className="text-xl mb-8">Discover the future of fashion</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Rest of the Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`https://images.unsplash.com/photo-${item}?auto=format&fit=crop&w=800`}
                alt={`Collection ${item}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Collection {item}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Fast Shipping", "Quality Assurance", "24/7 Customer Support"].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-700 text-center mb-8">
          At ZUDIO, we believe in providing the best fashion experience for our customers. Our mission is to bring you the latest trends and styles at affordable prices.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium mx-auto block"
        >
          Learn More
        </motion.button>
      </section>

         {/* Contact Us Section */}
      <section className="py-20 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" required rows={4} className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium w-full">
            Send Message
          </button>
        </form>
      </section>
      
      <footer className="py-6 bg-black text-white text-center">
        &copy; {new Date().getFullYear()} ZUDIO. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
