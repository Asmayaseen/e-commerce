"use client";

import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const OurProducts = () => {
  const products2 = [
    { id: 1, title: "Sandles for womens", price: "$65.90", isNew: true, image: "/product3.jpg" },
    { id: 2, title: "Shirts for man", price: "$60.20", oldPrice: "$70", isSale: true, image: "/top4.jpg" },
    { id: 3, title: "Perfume Collection for men", price: "$230", isNew: true, image: "/product6.jpg" },
    { id: 4, title: "Shoes for men", price: "$50", isNew: true, image: "/product27.jpg" },
    { id: 5, title: "Bags Collection for women", price: "$40", isNew: true, image: "/product15.jpg" },
    { id: 6, title: "Perfume for men and women", price: "$30", oldPrice: "$40", isSale: true, image: "/product22.jpg" },
    { id: 7, title: "Shoes for women", price: "$40", oldPrice: "$70", isSale: true, image: "/product14.jpg" },
  ];

  return (
    <div>
      <section className="py-8 px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products2.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement; // Type casting
                    target.src = "/fallback.jpg"; // Fallback image
                  }}
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    Sale
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center mt-2">
                  <p className="text-gray-800 font-bold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through ml-2">{product.oldPrice}</p>
                  )}
                </div>
              </div>
              <div className="px-4 pb-4 flex justify-end">
                <button
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition"
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                >
                  <CiShoppingCart size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
