import Image from "next/image";
import { Josefin_Sans } from "next/font/google"; // Use PascalCase for the font

// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Vel elit euismod",
      originalPrice: "49.00",
      discountedPrice: "26.00",
      image: "/images/chair2.png",
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/chair4.png",
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/chair5.png",
    },
    {
      id: 4,
      name: "Sed at fermentum",
      originalPrice: "42.00",
      discountedPrice: "26.00",
      image: "/images/image-4.png",
    },
    {
      id: 5,
      name: "Fusce pellentesque at",
      originalPrice: "34.99",
      discountedPrice: "24.99",
      image: "/images/chair6.png",
    },
    {
      id: 6,
      name: "Vestibulum magna laoreet",
      originalPrice: "44.99",
      discountedPrice: "34.99",
      image: "/images/image-6.png",
    },
    {
      id: 7,
      name: "Sollicitudin amet orci",
      originalPrice: "54.99",
      discountedPrice: "44.99",
      image: "/images/image-7.png",
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/image-8.png",
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/image-9.png",
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/image-10.png",
    },
    {
      id: 11,
      name: "Lectus vulputate faucibus",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/image-1165.png",
    },
    {
      id: 12,
      name: "Purus risus, ut",
      originalPrice: "64.99",
      discountedPrice: "54.99",
      image: "/images/image-1164.png",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      {/* Rectangle Section */}
      <div className="absolute mt-[-44px] left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold lg:ml-[10%] mt-[67px] font-"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Shop Grid Default
        </h1>
        <p
          className="mt-5 ml-[10%]"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages{" "}
          <span className="text-[#FB2E86]">. Shop Grid Default</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="absolute mt-[270px] top-4 sm:w-4/5 lg:w-3/4 px-4 sm:px-6 lg:px-8 ml-[10%] flex items-center justify-between">
        <div>
          <h2
            className="text-[#151875] font-bold whitespace-nowrap"
            style={{
              fontFamily: "Josefin Sans",
              fontSize: "22px",
              lineHeight: "25.78px",
            }}
          >
            Ecommerce Accessories & Fashion Items
          </h2>
          <p
            className="mt-2"
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.4px",
              color: "#8A8FB9",
            }}
          >
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort by and Per Page Section */}
        <div className="w-[40%] text-gray-300 whitespace-nowrap ">
          <div className="flex items-center gap-4 ">
            {/* Per Page: */}
            <div className="flex items-center">
              <label
                htmlFor="per-page"
                className="mr-2 text-[#3F509E] text-sm font-medium "
              >
                Per Page:
              </label>
              <input
                type="number"
                id="per-page"
                name="per-page"
                className="w-[55px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
              />
            </div>

            {/* Sort By: */}
            <div className="flex items-center">
              <label
                htmlFor="sort-by"
                className="mr-2 text-sm font-medium text-[#3F509E]"
              >
                Sort By:
              </label>
              <select
                id="sort-by"
                name="sort-by"
                className="border  border-[#E7E6EF] w-[110px] h-[25px] p-1 text-sm"
              >
                <option value="relevance" className="text-gray-400">
                  Best Match
                </option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>

            {/* View: */}
            <div className="flex items-center ">
              <label
                htmlFor="view"
                className="mr-2 text-sm font-medium text-[#3F509E]"
              >
                View:
              </label>

              <div className="flex gap-4">
                <Image
                                src="/images/clarity_grid-view-solid.png"
                                alt="Grid View"
                                width={17}
                                height={16}
                              />
                              <Image
                                src="/images/fa-solid_list.png"
                                alt="List View"
                                width={17}
                                height={16}
                              />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Product Grid */}
        <div className="mt-[400px] relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center relative"
            >
              {/* Card Container */}
              <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 flex justify-center items-center p-4 w-full md:w-[210px] h-[250px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name, Dots, and Prices Below the Card */}
              <h3 className="whitespace-nowrap text-[16px] font-sans font-bold mt-4">
                {product.name}
              </h3>
              <div className="flex justify-center items-center mt-2">
                <Image
                  src="/images/dots-icon.png"
                  alt="Three dots"
                  width={42}
                  height={10}
                />
              </div>
              <div className="flex justify-center gap-4 mt-2">
                <p className="text-red-500 line-through text-[14px]">
                  ${product.originalPrice}
                </p>
                <p className="text-green-600 font-bold text-[14px]">
                  ${product.discountedPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div className=" mt-[50px] flex items-center justify-center">
        <Image
          src="/images/image 1174.png"
          alt="brands"
          width={980}
          height={500}
          className="  object-cover"
        />
      </div>
    </div>
  );
}
