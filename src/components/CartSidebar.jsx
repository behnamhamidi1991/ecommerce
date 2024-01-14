import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

export default function CartSidebar() {
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  return (
    <div className="fixed top-0 right-0 w-38 h-full shadow-lg border-l border-l-gray-700 overflow-scroll">
      {loading ? (
        <div className="py-5 px-2">Loading ... </div>
      ) : cartItems.length === 0 ? (
        <div className="py-5 px-2">Cart is empty</div>
      ) : (
        <>
          <div className="p-2 flex flex-col items-center border-b border-b-gray-600">
            <div>Subtotal</div>
            <div className="font-bold text-orange-700">${itemsPrice}</div>
            <div>
              <Link
                href="/cart"
                className="w-full text-center p-1 rounded-2xl border-2"
              >
                Go to Cart
              </Link>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-2 flex flex-col items-center border-b border-b-gray-600"
              >
                <Link
                  href={`/product/${item.id}`}
                  className="flex items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="p-1"
                  ></Image>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
