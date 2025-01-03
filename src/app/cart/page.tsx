'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
};

const initialCartProducts: CartItem[] = [
  {
    id: 1,
    name: "Ut diam consequat",
    price: 52,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/images/cart1.png",
  },
  {
    id: 2,
    name: "Val faucibus posuere",
    price: 52,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/images/cart2.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: 52,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/images/cart3.png",
  },
  {
    id: 4,
    name: "Elit massa diam",
    price: 52,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/images/cart4.png",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    price: 52,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/images/cart5.png",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => setCartItems([]);
  const resetCart = () => setCartItems(initialCartProducts);

  return (
    <>
      {/* Header */}
      <div className="py-16 px-4 lg:px-28 bg-[#F6F5FF]">
        <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
          Shopping Cart
        </h1>
        <div className="flex justify-center lg:justify-start items-center gap-2 text-sm sm:text-base mt-2">
          <Link href="/" className="text-[#1D3178]">
            Home
          </Link>
          <p className="text-gray-500">. Pages</p>
          <p className="text-[#FB2E86]">Shopping Cart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="hidden sm:grid grid-cols-4 lg:mx-4 lg:pl-8 lg:gap-16 font-bold text-[#1D3178] mb-6">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center bg-white p-4 rounded-lg shadow-md mb-4"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold text-[#1D3178]">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Color: {item.color}, Size: {item.size}
                  </p>
                </div>
              </div>
              {/* Price */}
              <p className="text-[#1D3178] sm:text-center">
                ${item.price.toFixed(2)}
              </p>
              {/* Quantity */}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 px-2 py-1 border rounded-md text-center sm:justify-self-center"
                min="1"
              />
              {/* Total */}
              <p className="text-[#1D3178] font-bold sm:text-center">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            <button
              onClick={resetCart}
              className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white rounded-md hover:bg-pink-600"
            >
              Update Cart
            </button>
            <button
              onClick={clearCart}
              className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white rounded-md hover:bg-pink-600"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold text-[#1D3178] mb-4">
              Cart Totals
            </h2>
            <p className="flex justify-between text-[#1D3178] mb-2">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-[#1D3178] mb-4">
              <span>Shipping:</span>
              <span>$15.00</span>
            </p>
            <p className="flex justify-between font-bold text-lg text-[#1D3178]">
              <span>Total:</span>
              <span>${(calculateTotal() + 15).toFixed(2)}</span>
            </p>
            <Link href="/checkout">
              <button className="w-full py-3 bg-[#32CD32] text-white rounded-md font-bold hover:bg-green-700 mt-4">
                Proceed To Checkout
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#1D3178] mb-4">
              Calculate Shipping
            </h2>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
            </div>
            <button className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-bold hover:bg-pink-600 mt-4">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
