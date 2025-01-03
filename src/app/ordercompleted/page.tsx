'use client';

import Image from 'next/image';
import Link from 'next/link';

function OrderCompleted() {
  return (
    <>
      {/* Header Section */}
      <div className="py-16 px-4 lg:px-28  bg-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold">Order colmplete</h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Link href={"/"}>Home</Link>
            <p>. Pages</p>
            <p className="text-[#FB2E86]">Order colmpleted</p>
          </div>
        </div>
      <div className="man-h-screen py-12 ">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6 text-center">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#1D3178]">Order Completed</h1>

          {/* Tick Mark Image */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
              <Image
                src="/images/icon5.png" // Path to your tick image
                alt="Order Completed Icon"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </div>

          {/* Order Complete Text */}
          <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          <Link href="/shoplist">
          <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-lg font-medium">
            Continue Shopping
          </button>
          </Link>

          {/* Clock Icon */}
          <div className="flex justify-center items-center mt-4">
            <Image
              src="/images/icon6.png" // Path to your clock image
              alt="Clock Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        {/* Footer */}
                <div className="mt-12 flex justify-center px-4">
                  <Image
                    src="/images/image 1174.png"
                    alt="brands"
                    width={980}
                    height={500}
                    className="w-full max-w-[1080px]  max-h-auto object-cover"
                  />
                </div>
      </div>
      
    </>
  );
}

export default OrderCompleted;
