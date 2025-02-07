import Link from "next/link";
import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-[1100px] mx-auto">
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-600">
          <Link href="/" className="text-gray-800 hover:underline">
            Home
          </Link>
          / <span className="text-gray-500">Cart</span>
        </p>
      </div>

      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
              <tr>
                <th className="py-3 px-2 sm:px-4">Product</th>
                <th className="py-3 px-2 sm:px-4">Price</th>
                <th className="py-3 px-2 sm:px-4">Quantity</th>
                <th className="py-3 px-2 sm:px-4">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b">
                <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
                  <Image
                    src="/explore3.jpg"
                    alt="Hand watch"
                    className="w-12 h-12 object-cover"
                    height={54}
                    width={54}
                  />
                  <span className="text-xs sm:text-base">Wrist Watch</span>
                </td>
                <td className="py-4 px-2 sm:px-4">$250</td>
                <td className="py-4 px-2 sm:px-4">
                  <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
                <td className="py-4 px-2 sm:px-4">$250</td>
              </tr>
              <tr>
                <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
                  <Image
                    src="/product3.jpg"
                    alt="shoes"
                    className="w-12 h-12 object-cover"
                    height={54}
                    width={54}
                  />
                  <span className="text-xs sm:text-base">Sandles</span>
                </td>
                <td className="py-4 px-2 sm:px-4">$220</td>
                <td className="py-4 px-2 sm:px-4">
                  <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
                <td className="py-4 px-2 sm:px-4">$220</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 px-4 py-3 space-y-3 sm:space-y-0">
            <Link
              href="/"
              className="w-full sm:w-[218px] h-[56px] border-2 py-3 text-center rounded-md hover:bg-gray-400"
            >
              Return To Shop
            </Link>
            <button className="w-full sm:w-[218px] h-[56px] border-2 py-3 text-center rounded-md hover:bg-gray-400">
              Update Cart
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-medium mb-4">Coupon</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full border rounded-md px-3 py-2"
            />
            <button className="bg-red-500 text-white px-4 py-[11px] rounded-md w-full sm:w-[30%] text-sm">
              Apply Coupon
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-medium mb-4">Cart Total</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>$470</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>$470</span>
            </div>
          </div>
          <button className="bg-red-500 text-white w-full mt-4 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;