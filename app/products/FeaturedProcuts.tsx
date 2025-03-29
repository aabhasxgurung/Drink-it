"use client";
import Link from "next/link";
import React from "react";
import { FeaturedProducts } from "./_constant/Product";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
const FeaturedProcuts = () => {
  return (
    <div className="px-4 md:px-20 py-10 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-7xl mb-3 text-wine">
              Our Featured Products
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              laborum explicabo
            </p>
            <button className="mt-7">
              <Link href="/products">Discover Our Products</Link>
            </button>
          </div>
        </div>
        <div className="lg:col-span-9 relative">
          <div className="w-full flex relative z-10 gap-6">
            <Swiper
              slidesPerView={3.5} // Shows 2 full slides and part of the 3rd
              spaceBetween={20} // Adjusts spacing between slides
              pagination={{ clickable: true }}
              // modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                640: { slidesPerView: 1.5, spaceBetween: 15 }, // Tablets
                1024: { slidesPerView: 1.5, spaceBetween: 20 }, // Large screens
                1280: { slidesPerView: 2.7, spaceBetween: 20 },
                1600: { slidesPerView: 3.5, spaceBetween: 20 },
              }}
            >
              {FeaturedProducts.map((bottle, i) => (
                <SwiperSlide
                  key={bottle.slug || i}
                  className="relative group mt-4 w-full flex h-[300px]"
                >
                  <div className="mt-10">
                    <Image
                      src={bottle.img}
                      width={200}
                      height={300}
                      alt=""
                      className="w-full h-[352px] object-cover object-top"
                    />
                    <div>
                      <p className="text-sm pt-2 pb-3 font-sans capitalize font-normal">
                        {bottle.category}
                      </p>
                      <h1 className="text-lg line-clamp-1 font-semibold">
                        {bottle.name}
                      </h1>
                      <p className="text-base font-sans mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <Link href={`/products/${bottle.slug}`}>
                        <button className="mt-2">
                          <span>View More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[96.5%] h-[600px] absolute bg-[#FBF4E7] left-12 top-0 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProcuts;
