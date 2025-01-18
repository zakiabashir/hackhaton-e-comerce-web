

import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types/product';

 function LatestProducts({products}:{products:Product[]}) {
 

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">Latest Products</h2>

      {/* Tabs */}
<div className="flex justify-center space-x-8 mb-16">
  {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
    <button
      key={tab}
      className="text-[#3F509E] text-lg font-medium relative group hover:text-red-600"
    >
      {tab}
      {/* Underline */}
      <span
        className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"
      ></span>
    </button>
  ))}
</div>


      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product: Product) => (
          <div key={product._id} className="relative group">
            {/* Product Image */}
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
              {/* Sale Tag */}
              {product.sale && (
                <span className="bg-red-600 text-white font-bold text-sm absolute top-2 left-2 p-2">
                  Sale
                </span>
              )}
              <Image
                src={product.image_url}
                width={200}
                height={200}
                alt="Comfy Handy Craft"
                className="object-contain"
              />

              {/* Icons */}
              <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow">
                  <HeartIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <ShoppingCartIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-center mt-4">
  <h3 className="text-lg font-semibold text-[#3F509E] text-center">{product.name}</h3>
  <div className="mt-2 text-gray-600 flex items-center gap-2">
    <span className="text-gray-800">${product.price}</span> {/* New Price (Left) */}
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
