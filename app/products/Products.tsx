"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bottles } from "./_constant/Product";
import Link from "next/link";
import { Filter, Search } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden bg-[#F5EBDA]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/home/footerbg.png"
            fill
            alt="Cocktails background"
            className="object-contain object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
              Our Collection
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto px-4">
              Discover our carefully curated selection of premium wines and
              spirits
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search our collection..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7B0323] focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#7B0323] text-white rounded-lg hover:bg-[#5B0219] transition-colors duration-300">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </motion.div>
      </div>

      {/* Products Display */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
        >
          {Bottles.map((bottle) => (
            <motion.div
              key={bottle.slug}
              variants={fadeInUp}
              className="group relative"
            >
              <Link href={`/products/${bottle.slug}`}>
                <div className="relative flex flex-col items-center">
                  {/* Bottle Image with Reflection */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ y: -20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10"
                    >
                      <Image
                        src={bottle.img}
                        width={280}
                        height={400}
                        alt={bottle.name}
                        className="transform-gpu transition-transform duration-500 hover:scale-105 w-[280px] h-[400px] object-cover"
                      />
                    </motion.div>
                    {/* Reflection Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white/20 blur-sm transform scale-y-[-1] opacity-30" />
                  </div>

                  {/* Product Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-6 relative z-20"
                  >
                    <h3 className="font-serif text-2xl text-[#7B0323] mb-2 group-hover:text-[#5B0219] transition-colors">
                      {bottle.name}
                    </h3>
                    <p className="text-gray-600 font-light capitalize tracking-wide">
                      {bottle.category}
                    </p>
                  </motion.div>

                  {/* Hover Effect Circle */}
                  <div className="absolute -inset-4 rounded-full bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-[#7B0323] to-[#5B0219] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about new products,
              special offers, and expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-white text-[#7B0323] rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
