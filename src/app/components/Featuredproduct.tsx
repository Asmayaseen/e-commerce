import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const FeaturedProduct = () => {
  const products = [
    { id: 1, label: 'New', title: 'Our Upcoming Collection', price: '$100.5', oldPrice: '$115', image: '/featurdresses.jpg' },
    { id: 2, label: 'New', title: 'Stylish Shoes', price: '$110.5', oldPrice: '$120', image: '/feature1.jpg' },
    { id: 3, label: 'New', title: 'Skin Care', price: '$150', oldPrice: '$180', image: '/feature0.jpg' },
    { id: 4, label: 'New', title: 'Perfume Collection', price: '$110.5', oldPrice: '$120', image: '/feature3.jpg' },
    { id: 5, label: 'New', title: 'Clothes', price: '$135.5', oldPrice: '$140', image: '/featurejacket.jpg' },
    { id: 6, label: 'New', title: 'Cosmetics', price: '$124', oldPrice: '$120', image: '/feature5.jpg' },
  ];

  return (
    <div>
      {/* Featured Products */}
      <section>
        <div className="text-[#272343] text-[28px] sm:text-[32px] lg:text-[35px] font-sans font-semibold mt-3 sm:mt-4 lg:mt-6 mx-4 sm:mx-12 lg:mx-10">
          <h1>Featured Products</h1>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title || 'Product Image'}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                {product.label && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.label}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-gray-700 font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-lg font-bold">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm ml-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-[#029FAE] p-2 rounded-full hover:bg-gray-300">
                    <CiShoppingCart size={40} color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;
