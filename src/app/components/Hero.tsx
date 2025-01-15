'use client';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <div className=" flex flex-col  -mt-8 md:flex-row sm:my-28 md:my-4 pt-0 pb-10 items-center bg-violet-100 justify-center mx-auto gap-8 px-6 md:px-12 lg:px-20 max-w-[1920px]lg:h-[786px] md:h-[544px] relative">

      {/* Left Section - Bulb and Text */}
      <div className="relative  md:w-1/2 flex flex-row items-center md:items-start justify-center text-center md:text-left">

        {/* Bulb Image */}
        <div className="w-[150px] -top-[322px] sm:w-[200px] md:w-[387px] lg:w-[387px] mt-4 md:mt-[-122px]">
          <Image
            src="/images/bulb.png"
            alt="Bulb"
            width={387}
            height={387}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="relative mt-4 px-4 md:px-0 lg:w-[644px] lg:h-[248px]">
          {/* Tagline */}
          <p className="text-[#FB2E86] text-sm sm:text-lg md:text-xl font-medium mb-2">
            Best Furniture For Your Castle...
          </p>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black leading-tight mb-4">
            New Furniture Collection Trends in 2020
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>

          {/* Shop Now Button */}
          <Link href="/shoplist">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#FB2E86] text-white font-medium rounded-md shadow-md hover:bg-pink-600 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Pink Background, Sofa Image, Discount Badge */}
      <div className="relative w-full md:w-1/2 flex flex-wrap items-center justify-center">
        {/* Pink Background Circle */}
        <div className="absolute top-10 md:top-[40px] w-[220px] sm:w-[300px] md:w-[380px] lg:w-[450px] h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] bg-cover bg-center rounded-full z-0"
          style={{ backgroundImage: 'url(/images/pink.png)' }}>
        </div>

        {/* Sofa Image */}
        <div className="relative z-10 w-[220px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] bg-[#19D3DA] rounded-full flex flex-col justify-center items-center shadow-md">
          <span className="text-white text-sm sm:text-lg md:text-xl font-bold">50%</span>
          <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">OFF</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
