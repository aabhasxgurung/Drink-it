"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Bottles } from "./_constant/Product";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = Bottles.find((bottle) => bottle.slug === slug);

  if (!product) {
    return (
      <div className="text-center text-2xl text-red-600">Product not found</div>
    );
  }

  const { name, description, img, background } = product;

  return (
    <div>
      {background ? (
        <div
          className="relative inset-0 flex items-center justify-center z-10 w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ) : (
        <div className=""></div> // Correct empty fallback div
      )}

      <div className="relative max-w-[1200px] mx-auto flex justify-center items-center px-6 z-50 py-24">
        <div className="flex justify-center items-center flex-col space-y-6">
          <h2 className="text-6xl text-wine font-trajan text-center font-light max-w-4xl mx-auto">
            {name}
          </h2>
          <Image src={img} width={550} height={550} alt={name} />
          <p className="text-base font-trajan text-gray-800 leading-6 max-w-[1200px] mx-auto">
            {description}
          </p>
        </div>

        {/* <div className="flex-1 flex justify-end">
          <Image
            src={img}
            alt={name}
            width={500}
            height={500}
            className="max-h-full object-contain"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
