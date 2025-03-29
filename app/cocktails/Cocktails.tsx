"use client";
import { motion } from "framer-motion";

import CocktailCard from "./CocktailCard";
import Link from "next/link";
import Image from "next/image";
import HomeWrapper from "@/common/components/HomeWrapper";
import { cocktailsData } from "./cocktail";

// Define the cocktail data type

const Cocktails = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div>
        <Image
          src={"/backgrounds/cocktailbg.jpg"}
          width={1000}
          height={1000}
          alt="hello"
          className="w-full h-[600px] object-cover object-center
          "
        />
      </div>
      <HomeWrapper>
        <h1 className="text-[#7B0323] text-7xl font-serif z-50 text-center">
          Cocktails
        </h1>

        {/* Cocktails Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cocktailsData.map((cocktail) => (
                <motion.div
                  key={cocktail.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CocktailCard
                    id={cocktail.id}
                    name={cocktail.name}
                    description={cocktail.description}
                    ingredients={cocktail.ingredients}
                    instructions={cocktail.instructions}
                    imageUrl={cocktail.imageUrl}
                    difficulty={cocktail.difficulty}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Need Supplies For Your Bar?
              </h2>
              <p className="text-gray-600 mb-8">
                Explore our extensive collection of premium spirits and bar
                accessories to create these cocktails at home or in your
                establishment.
              </p>

              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-wine-900 text-white font-medium rounded-lg hover:bg-wine-800 transition-colors"
              >
                See Products
              </Link>
            </motion.div>
          </div>
        </section>
      </HomeWrapper>
    </div>
  );
};

export default Cocktails;
