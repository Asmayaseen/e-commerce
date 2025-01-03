import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="w-full bg-blue-300">
      {/* Hero Section */}
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8">
        {/* Left Side Content */}
        <div className="hidden md:block border-r-2 border-neutral-100 p-6">
          <ul className="space-y-3">
            <li className="leading-loose hover:underline cursor-pointer flex items-center justify-between">
              Woman&apos;s Fashion
              <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-2" />
            </li>
            <li className="leading-loose hover:underline cursor-pointer flex items-center justify-between">
              Men&apos;s Fashion
              <FontAwesomeIcon icon={faChevronRight} className="text-xs ml-2" />
            </li>
            <li className="leading-loose hover:underline cursor-pointer">Cosmetics</li>
            <li className="leading-loose hover:underline cursor-pointer">Shoes & Sandals</li>
            <li className="leading-loose hover:underline cursor-pointer">Bags</li>
            <li className="leading-loose hover:underline cursor-pointer">Shirts</li>
            <li className="leading-loose hover:underline cursor-pointer">
              Men&apos;s & Women&apos;s Jeans
            </li>
            <li className="leading-loose hover:underline cursor-pointer">
              Fragrance for Men & Women
            </li>
            <li className="leading-loose hover:underline cursor-pointer">Health & Beauty</li>
          </ul>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col items-center md:items-start w-full md:w-3/5">
          <div className="text-left space-y-4">
            <p className="text-sm text-gray-700 uppercase tracking-wide">
              Welcome to Our Market
            </p>
            <h1 className="text-4xl font-bold text-blue-900 leading-snug">
              Up to 10% off Voucher
            </h1>
            <button className="mt-4 px-8 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition-all">
              Shop Now <span className="ml-2">&rarr;</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="mt-8 w-full">
            <Image
              src="/banner.jpg"
              alt="Girls Shopping"
              priority
              width={1250}
              height={500}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
