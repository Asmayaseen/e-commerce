"use client"
import React from 'react';
import Image from 'next/image';

const Productpage = () => {
  const products = [
    { id: 1, label: 'New', title: 'Color Cosmetics', price: '$50', image: '/product.jpg' },
    { id: 2, label: 'Sales', title: 'Color Cosmetics', price: '$20', oldPrice: '$30', image: '/product2.jpg' },
    { id: 3, title: 'Sandles', price: '$220', image: '/product3.jpg' },
    { id: 4, title: 'Sandles', price: '$120', image: '/product4.jpg' },
    { id: 5, label: 'New', title: 'Fragrances', price: '$145', image: '/product5.jpg' },
    { id: 6, label: 'Sales', title: 'Fragrances', price: '$120', oldPrice: '$230', image: '/product6.jpg' },
    { id: 7, title: 'SkinCare', price: '$210', image: '/product7.jpg' },
    { id: 8, title: 'Shoes', price: '$250', image: '/product8.jpg' },
    { id: 9, label: 'New', title: 'Jewelry', price: '$520', image: '/product10.jpg' },
    { id: 10, label: 'Sales', title: 'Bags', price: '$70', oldPrice: '$100', image: '/product11.jpg' },
    { id: 11, title: 'Bags', price: '$120', image: '/product12.jpg' },
    { id: 12, title: 'Shoes and Sandles', price: '$220', image: '/product14.jpg' },
    { id: 13, label: 'New', title: 'Bags', price: '$80', image: '/product15.jpg' },
    { id: 14, label: 'New', title: 'Shoes and Sandles', price: '$20', image: '/product16.jpg' },
    { id: 15, label: 'Sales', title: 'Perfumes', price: '$290', image: '/product17.jpg' },
    { id: 16, label: 'New', title: 'Color Cosmetics', price: '$80', image: '/product18.jpg' },
    { id: 17, label: 'New', title: 'Shoes and Sandles', price: '$90', image: '/product19.jpg' },
    { id: 18, label: 'Sales', title: 'Watches', price: '$20', image: '/product20.jpg' },
    { id: 19, label: 'New', title: 'Jeans for men & women', price: '$50', image: '/product21.jpg' },
    { id: 20, label: 'New', title: 'Perfumes for men & women', price: '$20', image: '/product22.jpg' },
    { id: 21, label: 'New', title: 'Shirt For Men & Women', price: '$20', image: '/product23.jpg' },
    { id: 22, label: 'Sales', title: 'Shoes and Sandles', price: '$29410', image: '/product24.jpg' },
    { id: 23, label: 'New', title: 'Color Cosmetics', price: '$240', image: '/product25.jpg' },
    { id: 24, label: 'Sales', title: 'Color Cosmetics', price: '$120', image: '/product26.jpg' },
    { id: 25, label: 'New', title: 'Shoes', price: '$270', image: '/product27.jpg' },
    { id: 26, label: 'New', title: 'Color Cosmetics', price: '$280', image: '/top1.jpg' },
    { id: 27, label: 'New', title: 'Perfumes', price: '$520', image: '/top3.jpg' },
    { id: 28, label: 'Sales', title: 'Sandles', price: '$220', image: '/top2.jpg' },
    { id: 29, label: 'New', title: 'Clothes', price: '$120', image: '/top4.jpg' },
    { id: 30, label: 'New', title: 'Bags', price: '$210', image: '/top5.jpg' },
    { id: 31, label: 'New', title: 'Shoes', price: '$230', image: '/top6.jpg' },
    { id: 32, label: 'New', title: 'Color Cosmetics', price: '$120', image: '/top7.jpg' },
  ];

  return (
    <section id="product">
      <h1 className="text-[#272343] font-sans text-[32px] mt-10 ml-11 font-semibold">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-11 mr-11 mt-12 mb-20">
        {products.map((product) => (
          <article
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/fallback.jpg'; // Set a fallback image
                }}
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
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  🛒
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-[#F0F2F3]">
        <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-[50px] mt-4">
            Or Subscribe to the Newsletter
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-start mt-6 md:mt-12">
              <span className="text-[#8F9499] text-sm md:text-[16px] font-semibold mb-2 ml-3">
                Email address...
              </span>
              <div className="w-full md:w-[643px] h-[2px] bg-black"></div>
            </div>
            <div className="flex flex-col items-center mt-6 md:mt-12">
              <span className="text-sm md:text-[16px] font-normal mb-2">SUBMIT</span>
              <div className="w-[91px] h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-center">
            Follow Products and Discounts on Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-12">
            {[ 
              '/pexels-didsss-1625037.jpg',
              '/pexels-jhong-pascua-1062908-3018845.jpg',
              '/pexels-marcelo-moreira-988124-1926620.jpg',
              '/pexels-ron-lach-8386654.jpg',
              '/pexels-sekav-werna-1427020655-28719728.jpg',
              '/pexels-paduret-1377034.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Instagram product ${index + 1}`}
                  width={186}
                  height={186}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productpage;