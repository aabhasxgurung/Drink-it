"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wine, ExternalLink } from "lucide-react";

const brands = [
  {
    id: 1,
    name: "Hapusa",
    img: "/home/hapusalogo.png",
    description: "Premium Indian Craft Gin",
  },
  {
    id: 2,
    name: "Sula",
    img: "/home/sulalogo.png",
    description: "India's Leading Wine Brand",
  },
  {
    id: 3,
    name: "Luxardo",
    img: "/home/Luxardologo.png",
    description: "Italian Liqueur Excellence",
  },
  {
    id: 4,
    name: "Greater Than",
    img: "/home/greaterthanlogo.png",
    description: "India's Permium Gin",
  },
];

const MiniBanner = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif text-[#7B0323] mb-4">
              Explore Our Premium Brands
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
              Discover our carefully curated selection of world-class spirits
              and wines, each chosen for their exceptional quality and heritage.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square relative mb-4 bg-white rounded-lg overflow-hidden">
                <Image
                  src={brand.img}
                  fill
                  alt={brand.name}
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-sm font-sans">
                  {brand.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-[#7B0323]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#explore"
            className="inline-flex items-center gap-2 text-[#7B0323] font-semibold hover:text-[#5B0219] transition-colors duration-300"
          >
            View All Brands
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniBanner;
