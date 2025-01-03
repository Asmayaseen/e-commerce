"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTruck, FaCheck } from 'react-icons/fa';
import { IoFileTrayOutline } from 'react-icons/io5';
import { BiSolidLeaf } from 'react-icons/bi';
import { client } from '../../sanity/lib/client';

// Define the Product type
type Product = {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const About = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products data from Sanity using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "product"]';
      const products: Product[] = await client.fetch(query);
      setProducts(products);
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      {/* About Section */}
      <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center bg-white mt-16 lg:mt-32 px-6 gap-8">
        {/* Left Section */}
        <div className="w-full flex justify-center items-start">
          <div className="sm:w-full md:w-[80%] my-11 flex sm:flex-col md:flex-row justify-center items-start gap-x-5 gap-y-6">
            {/* Left */}
            <div className="sm:w-full md:w-[60%] sm:p-8 md:p-0">
              <h1 className="sm:text-xl md:text-5xl font-bold">Our Story</h1>
              <p className="pt-6">
                Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p className="mt-5">
                Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96">
            <Image
              src="/pexels-lum3n-44775-322207.jpg"
              alt="bags"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="max-w-screen-xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Features */}
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaTruck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Next day as standard</h3>
            <p className="text-sm mt-4 text-[#007580]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaCheck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Made by true artisans</h3>
            <p className="text-sm mt-4 text-[#007580]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <IoFileTrayOutline className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Unbeatable prices</h3>
            <p className="text-sm mt-4 text-[#007580]">
              For our materials and quality, you won’t find better prices anywhere.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <BiSolidLeaf className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Recycled packaging</h3>
            <p className="text-sm mt-4 text-[#007580]">
              We use 100% recycled material to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="max-w-screen-xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-semibold text-left mb-12">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div key={product._id} className="text-center">
              <div className="relative w-full h-64">
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <p className="pt-5 text-lg font-medium">{product.name}</p>
              <p className="pt-2 text-md text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
