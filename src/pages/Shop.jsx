import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag, FiSearch, FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Sun, Moon, Heart, ShoppingCart, User } from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "Premium Cotton Shirt",
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#3B82F6", "#10B981", "#EF4444"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Slim Fit Denim Jacket",
    price: 3499,
    originalPrice: 3999,
    discount: 12,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#1F2937", "#6B7280"],
    sizes: ["S", "M", "L"],
    rating: 4.8,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Urban Street Sneakers",
    price: 2799,
    originalPrice: 3299,
    discount: 15,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#000000", "#FFFFFF", "#DC2626"],
    sizes: ["7", "8", "9", "10"],
    rating: 4.7,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Casual Linen Trousers",
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#78350F", "#F59E0B", "#064E3B"],
    sizes: ["28", "30", "32", "34"],
    rating: 4.3,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    price: 2299,
    originalPrice: 2599,
    discount: 12,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#1E40AF", "#000000", "#831843"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 6,
    name: "Classic Aviator Sunglasses",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    colors: ["#92400E", "#000000"],
    sizes: ["One Size"],
    rating: 4.9,
    isNew: false,
    isBestSeller: true
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  return (
    <motion.div 
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
            BESTSELLER
          </span>
        )}
        {product.discount > 0 && (
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist button */}
        <button 
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        onClick={() => alert("✨ Dream Item Added to Your Wishlist! ✨")}
        >
        <FiHeart className="text-gray-600 hover:text-red-500" />
        </button>


      {/* Product image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Button - appears on hover */}
        {isHovered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Quick View
          </motion.button>
        )}
      </div>

      {/* Product details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        {/* Color options */}
        <div className="flex space-x-2 mb-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-5 h-5 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
              style={{ backgroundColor: color }}
              title={`Color ${color}`}
            />
          ))}
        </div>
        
        {/* Size options */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-1 text-xs rounded-md ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              {size}
            </button>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        
        {/* Add to cart button */}
        <button className="mt-3 w-full flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <FiShoppingBag />
          <span>Add to Bag</span>
        </button>
      </div>
    </motion.div>
  );
};

const FilterSection = ({ title, children, isOpen = true }) => {
  const [open, setOpen] = useState(isOpen);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-bold text-gray-900">{title}</h3>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      
      {open && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  const categories = ["T-Shirts", "Shirts", "Jeans", "Jackets", "Shoes", "Accessories"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Pink"];
  const priceRanges = [
    { label: "Under ₹1000", value: [0, 1000] },
    { label: "₹1000 - ₹2000", value: [1000, 2000] },
    { label: "₹2000 - ₹3000", value: [2000, 3000] },
    { label: "Over ₹3000", value: [3000, 10000] }
  ];
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="w-full lg:w-72 bg-white p-5 rounded-xl shadow-sm sticky top-5 h-fit">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button className="text-sm text-gray-500 hover:text-black">Reset All</button>
      </div>
      
      <FilterSection title="Categories">
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="h-4 w-4 text-black rounded focus:ring-black"
              />
              <label htmlFor={`cat-${category}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>
      
      <FilterSection title="Price Range">
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={selectedPriceRange[1]}
            onChange={(e) => setSelectedPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
          />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">₹0</span>
            <span className="text-xs text-gray-600">₹{selectedPriceRange[1].toLocaleString()}</span>
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          {priceRanges.map((range, i) => (
            <div key={i} className="flex items-center">
              <input
                type="radio"
                id={`price-${i}`}
                name="price-range"
                checked={selectedPriceRange[0] === range.value[0] && selectedPriceRange[1] === range.value[1]}
                onChange={() => setSelectedPriceRange(range.value)}
                className="h-4 w-4 text-black focus:ring-black"
              />
              <label htmlFor={`price-${i}`} className="ml-2 text-sm text-gray-700">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>
      
      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              type="button"
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 rounded-md text-sm ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>
      
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              type="button"
              onClick={() => toggleColor(color)}
              className={`w-8 h-8 rounded-full ${selectedColors.includes(color) ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

const SortOptions = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { value: '', label: 'Recommended' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'rating', label: 'Highest Rated' }
  ];
  
  const handleSelect = (value) => {
    setSelectedOption(value);
    onSort(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
      >
        <FiFilter />
        <span>{options.find(opt => opt.value === selectedOption)?.label || 'Sort By'}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`block w-full text-left px-4 py-2 text-sm ${selectedOption === option.value ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);
  }, []);

  const handleSort = (sortOption) => {
    let sortedProducts = [...products];
    
    switch(sortOption) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming newer products have higher IDs for this demo
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (original order)
        sortedProducts = [...productsData];
        break;
    }
    
    setProducts(sortedProducts);
  };

  return (
    <div className="flex-1">
      {/* Header with search and sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Zudio Fashion Collection</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <SortOptions onSort={handleSort} />
        </div>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl aspect-square animate-pulse"></div>
          ))}
        </div>
      )}
      
      {/* Products grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            &laquo;
          </button>
          <button className="px-3 py-1 rounded-md bg-black text-white">
            1
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            2
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            3
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

const ThreeJSBackground = () => {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5} 
      />
    </Canvas>
  );
};

const Shop = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
        {/* Navbar */}
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
      <ThreeJSBackground />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-black md:ml-2">
                  Shop
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="ml-1 text-sm font-medium text-black md:ml-2">
                  All Products
                </span>
              </div>
            </li>
          </ol>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar - hidden on mobile by default */}
          <div className="hidden lg:block">
            <Filters />
          </div>
          
          {/* Mobile filters button */}
          <div className="lg:hidden mb-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg">
              <FiFilter />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Main product grid */}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;