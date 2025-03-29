"use client";
import React from "react";
import Image from "next/image";
import { Bottles } from "./_constant/Product";
import Link from "next/link";
import HomeWrapper from "../../common/components/HomeWrapper";

const Products = () => {
  return (
    <div>
      <div>
        <Image
          src={"/backgrounds/productsbg.jpg"}
          width={1000}
          height={1000}
          alt="hello"
          className="w-full h-[600px] object-cover object-bottom"
        />
      </div>
      <HomeWrapper>
        <h1 className="text-[#7B0323] text-7xl font-serif z-50 text-center">
          Discover Our Iconic Products
        </h1>

        <div className="grid grid-cols-3 mx-auto gap-20 py-20 max-w-[1200px]">
          {Bottles.map((bottle, i) => (
            <Link
              href={`/products/${bottle.slug}`}
              key={i}
              className="relative group w-[280px] cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="rounded-xl">
                <Image
                  src={bottle.img}
                  width={280}
                  height={400}
                  alt={bottle.name}
                  className="w-[280px] h-[400px] object-cover rounded-xl hover:scale-110 transition-all"
                  loading="lazy"
                />
                <h2 className="font-serif text-[#7B0323] text-center text-3xl pt-6 pb-2">
                  {bottle.name}
                </h2>
                <h3 className="text-gray-700 text-center font-serif capitalize">
                  {bottle.category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default Products;
