"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTruck, FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faDollarSign,
  faShoppingBag,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { client } from "../../sanity/lib/client";

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
                Launched in 2015, Exclusive is South Asia&apos;s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p className="mt-5">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer.
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
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Features */}
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaTruck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">
              Next day as standard
            </h3>
            <p className="text-sm mt-4 text-[#007580]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaCheck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">
              Made by true artisans
            </h3>
            <p className="text-sm mt-4 text-[#007580]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <IoFileTrayOutline className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">
              Unbeatable prices
            </h3>
            <p className="text-sm mt-4 text-[#007580]">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <BiSolidLeaf className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">
              Recycled packaging
            </h3>
            <p className="text-sm mt-4 text-[#007580]">
              We use 100% recycled material to ensure our footprint is more
              manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="max-w-screen-xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-semibold text-left mb-12">
          Our Popular Products
        </h2>
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

      {/* Stats Section */}
      <section className="max-w-[1100px] mx-auto flex justify-center items-center mt-24 mb-10">
        {/* Stats Container */}
        <div className="sm:w-full md:w-full border-b-2 border-neutral-100 pb-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-5">
            {/* Box1 */}
            <div className="shadow-lg border-solid border-2 rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
              <span className="bg-black rounded-full text-white p-3">
                <FontAwesomeIcon icon={faStore} size="2x" />
              </span>
              <span className="text-xl font-bold">10.5k</span>
              <p className="sm:text-[8px] md:text-sm text-center">
                Sellers active on our site
              </p>
            </div>

            {/* Box2 */}
            <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
              <span className="bg-black rounded-full text-white p-3">
                <FontAwesomeIcon icon={faDollarSign} size="2x" />
              </span>
              <span className="text-xl font-bold">33k</span>
              <p className="sm:text-[8px] md:text-sm text-center">
                Monthly Product Sales
              </p>
            </div>

            {/* Box3 */}
            <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
              <span className="bg-black rounded-full text-white p-3">
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
              </span>
              <span className="text-xl font-bold">45.5k</span>
              <p className="sm:text-[8px] md:text-sm text-center">
                Customers active on our site
              </p>
            </div>

            {/* Box4 */}
            <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
              <span className="bg-black rounded-full text-white p-3">
                <FontAwesomeIcon icon={faMoneyBill1Wave} size="2x" />
              </span>
              <span className="text-xl font-bold">25k</span>
              <p className="sm:text-[8px] md:text-sm text-center">
                Annual Gross Sales
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
