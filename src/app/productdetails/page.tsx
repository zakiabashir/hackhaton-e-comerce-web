import React from "react";
import Image from "next/image";

export default function ProductDetails() {
  const relatedProducts = [
    {
      id: 1,
      name: "Stylish Chair",
      image: "/images/shoplist1.png",
      price: "$99.00",
      oldPrice: "$150.00",
    },
    {
      id: 2,
      name: "Comfortable Sofa",
      image: "/images/shoplist2.png",
      price: "$120.00",
      oldPrice: "$180.00",
    },
    {
      id: 3,
      name: "Modern Lamp",
      image: "/images/shoplist3.png",
      price: "$45.00",
      oldPrice: "$60.00",
    },
    {
      id: 4,
      name: "Wooden Table",
      image: "/images/shoplist4.png",
      price: "$150.00",
      oldPrice: "$200.00",
    },
  ];

  return (
    <div className="relative max-w-[1920px] m-auto">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] mb-20 h-[200px] flex flex-col justify-center px-6 lg:px-0">
        <div className="lg:ml-[283px] text-center lg:text-left">
          <h1 className="text-[#151875] font-bold text-[24px] lg:text-[36px] leading-[25.78px] font-[Josefin Sans]">
            Product Details
          </h1>
          <p className="mt-5 text-[14px] lg:text-[16px] font-medium font-[Josefin Sans] text-black">
            Home . Pages <span className="text-[#FB2E86]">. Product Details</span>
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="relative bg-white shadow-lg rounded-lg w-full lg:w-[960px] mx-auto mt-[-75px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Images Section */}
          <div className="flex flex-row lg:flex-col gap-4 p-4 justify-center lg:justify-start">
            <Image
              src="/images/p0OlRAAYXLY.png"
              alt="Product Image 1"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/cart3.png"
              alt="Product Image 2"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/cart4.png"
              alt="Product Image 3"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
          {/* Main Product Image */}
          <div className="p-4 flex justify-center">
            <Image
              src="/images/cart2.png"
              alt="Main Product Image"
              width={375}
              height={487}
              className="rounded-lg"
            />
          </div>
          {/* Product Info Section */}
          <div className="p-6">
            <h1 className="text-[#151875] font-bold text-[24px] lg:text-[36px] mb-2">
              Playwood Arm Chair
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 text-[14px]">★★★★☆</span>
              <span>(22)</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-red-500 line-through text-[14px] lg:text-[16px]">$49.00</p>
              <p className="text-[#151875] font-bold text-[14px] lg:text-[16px]">$26.00</p>
            </div>
            <p className="text-[#A9ACC6] text-[14px] lg:text-[16px] mb-6 leading-[1.8]">
              A beautiful playwood arm chair that adds a touch of elegance and
              comfort to any room.
            </p>
            <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md mb-4">
              Add to Cart
            </button>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-semibold text-[#151875]">Categories:</span>
              <span className="text-[#A9ACC6]">Furniture, Chairs</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-[#151875]">Share:</span>
              <div className="flex gap-2">
                <Image
                  src="/images/icons-fit.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#F6F5FF]">
 {/* Description */}
 <div className="w-[960px] mx-auto mt-10">
    <h4 className="font-semibold text-[#151875] mb-2 mt-11">Varius tempor.</h4>
    <p className="text-[13px] text-[#A9ACC6] font-Josefin Sans line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
      est bibendum. A dish Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam heroine
      tincidunt. The Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.
      Eu in fringilla vulputate nunchiyo nec. Dui, massa viverra ...
    </p>
  </div>

  {/* More Details */}
  <div className="w-[960px] mx-auto mt-10">
  <h4 className="text-[#151875] mb-2 font-semibold">More details</h4>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[13px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
</div>
</div>
      {/* Related Products Section */}
      <div className="w-[960px] mx-auto mt-10">
        <h2 className="text-[#151875] font-bold text-[24px] mb-6">
          Related Products
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-lg "
              />
              <h3 className="text-[#151875] font-bold mt-4">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 line-through text-[14px]">
                  {product.oldPrice}
                </span>
                <span className="text-[#151875] font-bold text-[16px]">
                  {product.price}
                </span>
              </div>
              <button className="mt-4 bg-[#FB2E86] text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
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
  );
}  