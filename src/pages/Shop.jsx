import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const productsData = [
  {
    "id": 1,
    "name": "Casual Shirt",
    "price": 29.99,
    "image": "https://via.placeholder.com/200"
  },
  {
    "id": 2,
    "name": "Denim Jacket",
    "price": 49.99,
    "image": "https://via.placeholder.com/200"
  },
  {
    "id": 3,
    "name": "Sneakers",
    "price": 59.99,
    "image": "https://via.placeholder.com/200"
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Quick View
      </button>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Category</h3>
        <select className="w-full p-2 mt-2 border rounded-md">
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Price Range</h3>
        <input type="range" className="w-full mt-2" min="0" max="500" />
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ThreeJSBackground = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0">
      <ambientLight intensity={0.5} />
      <OrbitControls />
    </Canvas>
  );
};

const Shop = () => {
  return (
    <div className="relative min-h-screen flex bg-gray-50 p-10">
      <ThreeJSBackground />
      <div className="relative z-10 flex w-full">
        <Filters />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Shop;
