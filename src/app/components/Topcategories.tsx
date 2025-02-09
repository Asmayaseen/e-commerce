import React from 'react';
import Image from 'next/image';

const TopCategories = () => {
  return (
    <div className="p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mens branded shoes */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-80">
            <Image
              src="/top7.jpg"
              alt="blush"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">Color Cosmetics</h3>
            <p>9,765 Products</p>
          </div>
        </div>

        {/* Handicraft bags */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-80">
            <Image
              src="/top6.jpg"
              alt="shoes"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">Man Shoes</h3>
            <p>136 Products</p>
          </div>
        </div>

        {/* Women section */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-80">
            <Image
              src="/top2.jpg"
              alt="women"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">Women&apos;s Collection</h3>
            <p>1,760 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
