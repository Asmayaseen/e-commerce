"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(false);

  const toggle = () => setOpen(!open);
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  const toggleFavorites = () => setFavorites(!favorites);

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          <div>
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1">
              Exclusive
            </h1>
          </div>

          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul
              className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black"
              onClick={() => setOpen(false)}
            >
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/product">Product</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} className="text-xl ml-2" />
              </button>
            </div>

            <FontAwesomeIcon
              icon={faHeart}
              className={`text-2xl cursor-pointer ${
                favorites ? "text-red-500" : "text-gray-700"
              }`}
              onClick={toggleFavorites}
            />

            {/* Cart Icon with Link */}
            <Link href="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 mr-1 text-2xl cursor-pointer"
              />
            </Link>

            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
