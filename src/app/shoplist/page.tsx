import Image from "next/image";
import Link from "next/link";
import { Key } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

const shoplist: any[] = [
  
    {
      id: 1,
      name: "Accumsan tincidunt",
      image: "/images/shoplist1.png",
      price: "$120.00",
      oldPrice: "$150.00",
      description: "Consectetur adipiscing elit.",
      rating: 4,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 2,
      name: "In nulla",
      image: "/images/shoplist2.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Magna in est adipiscing in phasellus non in justo.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 3,
      name: "Vel sem",
      image: "/images/shoplist3.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem ipsum dolor sit amet.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 4,
      name: "Porttitor cum",
      image: "/images/shoplist4.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem ipsum dolor sit amet.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 5,
      name: "Nunc in",
      image: "/images/shoplist5.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem Magna in est adipiscing.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 6,
      name: "Vitae facilisis",
      image: "/images/shoplist6.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "consectetur adipiscing elit. Magna in.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 7,
      name: "Curabitur lectus",
      image: "/images/shoplist7.png",
      price: "$99.00",
      oldPrice: "$130.00",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      rating: 5,
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
  ];

const ShopList = () => {
  
  
  return (
    <>
      <div className="font-sans text-[#151875]">
        {/* Header Section */}
        <div className="py-16 px-4 lg:px-28 bg-[#F6F5FF]">
          <h1 className="text-3xl sm:text-4xl font-bold">Shop List</h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Link href={"/"}>Home</Link>
            <p>Pages</p>
            <p className="text-[#FB2E86]">Shopping List</p>
          </div>
        </div>

        {/* Filter and Sorting Section */}
        <div className="py-4 px-4 flex flex-col lg:flex-row lg:justify-around items-start lg:items-center space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-2">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {/* Per Page */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="perPage"
                className="text-sm font-medium text-gray-700"
              >
                Per Page:
              </label>
              <input
                type="text"
                id="perPage"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sortBy"
                className="text-sm font-medium text-gray-700"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm font-medium">
                View:
              </label>
              <div className="flex gap-2">
                <Image
                  src="/images/clarity_grid-view-solid.png"
                  alt="Grid View"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/fa-solid_list.png"
                  alt="List View"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="px-4 lg:px-28">
          <div className="grid grid-cols-1 gap-8 ">
            {shoplist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col  lg:flex-row items-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="max-w-full lg:pl-8 lg:w-1/2 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="max-w-full lg:pl-8 lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
                  <div className="flex gap-8 items-center">
                    <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
                    <div className="flex gap-1">
                      {product.colors.map((color: string, index: Key | null | undefined) => (
                        <span
                          key={index}
                          className={`w-4 h-4 ${color} rounded-full`}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-lg font-bold">{product.price}</span>
                    <span className="text-red-500 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-2 flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-lg`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex space-x-4">
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                      <AiOutlineHeart size={24} />
                    </button>
                    <Link href="/cart">
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                        <AiOutlineShoppingCart size={24} />
                      </button>
                    </Link>
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                      <AiOutlineEye size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-center px-4">
          <Image
            src="/images/image 1174.png"
            alt="brands"
            width={980}
            height={500}
            className="w-full max-w-[1080px] h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ShopList;
