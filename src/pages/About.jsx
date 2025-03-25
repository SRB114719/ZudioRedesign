import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Heart, ShoppingCart, User } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Navbar - Identical to Contact page */}
      <nav className="fixed w-full top-0 z-50 bg-white text-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">ZUDIO</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="hover:text-gray-500">Home</Link>
              <Link to="/shop" className="hover:text-gray-500">Shop</Link>
              <Link to="/collections" className="hover:text-gray-500">Collections</Link>
              <Link to="/about" className="hover:text-gray-500">About</Link>
              <Link to="/contact" className="hover:text-gray-500 font-medium">Contact</Link>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-600 to-gray-400 p-8 rounded-xl shadow-lg text-white mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg">
            Redefining fashion through innovation and sustainability
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              At ZUDIO, we believe in the power of fashion to inspire and transform. 
              Our mission is to create sustainable, innovative clothing that empowers 
              individuals to express their unique style while minimizing environmental impact.
            </p>
            <p className="text-gray-600">
              We're committed to using eco-friendly materials, ethical manufacturing 
              processes, and cutting-edge technology to bring you the future of fashion today.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Mission Visual</span>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries in fashion technology and design.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'Creating fashion that respects and protects our planet.',
                icon: '🌱'
              },
              {
                title: 'Community',
                description: 'Building connections through style and shared values.',
                icon: '👥'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Meet The Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Team Member {item}</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">Team Member</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;