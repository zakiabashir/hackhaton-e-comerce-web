import Image from "next/image";
import Link from "next/link";

function Discount() {
  return (
    <div className="w-full py-16 sm:py-20 px-4">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#3F509E] text-3xl sm:text-4xl font-bold text-center mb-8">
          Discount Item
        </h2>

        {/* Tag Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["Wood Chair", "Plastic Chair", "Sofa Chair"].map((tag) => (
            <button
              key={tag}
              className="relative text-lg font-medium text-gray-700 hover:text-pink-600"
            >
              {tag}
              <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Left Side - Text Section */}
          <div className="text-center md:text-left px-4 md:px-0">
            <h3 className="text-[#3F509E] text-2xl sm:text-3xl font-bold mb-4">
              20% Discount Of All Products
            </h3>
            <h4 className="text-pink-600 text-lg sm:text-xl font-semibold mb-6">
              Eames Sofa Compact
            </h4>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <li className="flex items-start space-x-4">
    <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600">
      ✓
    </span>
    <span className="text-gray-600">Material expose like metals.</span>
  </li>
  <li className="flex items-start space-x-4">
    <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600">
      ✓
    </span>
    <span className="text-gray-600">Clear lines and geometric figures.</span>
  </li>
  <li className="flex items-start space-x-4">
    <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600">
      ✓
    </span>
    <span className="text-gray-600">Simple neutral colours.</span>
  </li>
  <li className="flex items-start space-x-4">
    <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600">
      ✓
    </span>
    <span className="text-gray-600">Material expose like metals.</span>
  </li>
</ul>

            {/* Shop Now Button */}
            <Link href="/shoplist">
              <button className="px-6 py-2 bg-[#FB2E86] text-white font-medium rounded-md shadow-md hover:bg-pink-600 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 bg-pink-100 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] -z-10 rounded-full"
              style={{ margin: "auto" }}
            ></div>
            <Image
              src="/images/sofa3.png"
              alt="Discount Sofa"
              width={500}
              height={500}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
