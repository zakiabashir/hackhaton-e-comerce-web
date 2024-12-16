'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser,  } from 'react-icons/fa';
import { useState } from 'react';
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 max-w-[1920px]] text-white py-2 text-sm  ">
      <div className=" max-w-[1200px] mx-auto  flex items-center justify-around px-4 flex-wrap">
        {/* Left Section */}
        <div className="flex items-center gap-6 md:gap-1 md:text-sm">
          {/* Email */}
          <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2  hover:text-gray-200">
            <FaEnvelope />
            <span>mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gray-200">
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md;gap-0 md:font-[10px]">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
<li className="flex items-center gap-2 hover:text-gray-200">
  <Link href="/account" className="flex">
  <span>login</span><FaUser />
  </Link>
</li>
<div className="hidden sm:flex items-center gap-x-6">
          
            <Link href="/wishlist" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
            <span>Wishlist</span>
              <HeartIcon className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
              <ShoppingCartIcon className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;
