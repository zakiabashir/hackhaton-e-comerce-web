'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  return (
    <div className="relative justify-evenly max-w-[1920px] gap-2 bg-[#F3F3F3] overflow-hidden flex flex-col md:flex-row items-center m-auto px-4 md:px-12 lg:px-20 py-8 md:py-16">

      {/* Left Section */}
      <div className="relative w-full justify-evenly gap-4 md:w-1/2 flex flex-col items-start text-center md:text-left">
        {/* Bulb Image */}
        <div className="absolute top-[-50px] left-[0px] md:top-[-150px] md:left-[-90px] w-[387px] h-[387px] md:w-[220px] md:h-[220px]">
          <Image
            src="/images/bulb.png"
            alt="Bulb"
            width={387}
            height={387}
            className="object-contain w-full"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 mt-8 md:mt-0">
          <p className="text-[#FB2E86] text-base md:text-lg font-medium mb-2">
            Best Furniture For Your Castle...
          </p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-snug mb-5">
            New Furniture Collection Trends in 2020
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>

          <Link href="/shoplist">
            <button className="px-6 py-3 bg-[#FB2E86] text-white font-medium rounded-md shadow-md hover:bg-pink-600 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        {/* Pink Background Circle */}
        <div className="absolute top-[20px] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-cover bg-center z-0 rounded-full bg-[#FDE8F5]"></div>

        {/* Sofa Image */}
        <div className="relative z-10 w-[80%] md:w-[70%] lg:w-[50%]">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={400}
            height={400}
            className="object-contain w-full"
          />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-[10px] right-[10px] md:top-[30px] md:right-[50px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-[#08D1F9] text-white rounded-full">
          <div className="text-center leading-tight">
            <span className="block text-sm md:text-lg font-bold">50%</span>
            <span className="block text-xs md:text-sm font-medium">OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
