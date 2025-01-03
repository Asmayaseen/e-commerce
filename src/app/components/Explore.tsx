import React from "react";
import Image from "next/image";

const Explore = () => {
  return (
    <div>
      {/* explore section */}

      <div className="flex flex-col items-center min-h-screen">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl p-4">
          {/* Left Image */}
          <div className="flex flex-1 justify-center items-center bg-white p-4">
            <Image
              src="/explore.jpg"
              alt="unique"
              height={645}
              width={645}
            ></Image>
          </div>

          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 p-4 pt-10">
            <Image
              src="/product4.jpg"
              alt="bags"
              height={312}
              width={312}
            ></Image>

            <Image
              src="/explore3.jpg"
              alt="watch"
              height={312}
              width={312}
            ></Image>

            <Image src="/top5.jpg" 
            alt="bags" 
            height={312} 
            width={312}
            ></Image>

            <Image
              src="/women.jpg"
              alt="stylish dress"
              height={312}
              width={312}
            ></Image>
          </div>
        </div>

        {/* Text */}
        <div className="absolute -rotate-90 text-gray-700 text-xl font-bold tracking-wide block mt-[300px] -ml-[1030px] ">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>
    </div>
  );
};

export default Explore;
