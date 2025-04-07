"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CocktailCard from "./CocktailCard";
import Link from "next/link";
import Image from "next/image";
import HomeWrapper from "@/common/components/HomeWrapper";
import { cocktailsData } from "./cocktail";
import { Search, Martini } from "lucide-react";

const Cocktails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredCocktails = cocktailsData.filter((cocktail) => {
    const matchesSearch =
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cocktail.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "All" ||
      cocktail.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const difficulties = ["All", "Easy", "Medium", "Advanced"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/backgrounds/cocktailbg.jpg"
            fill
            alt="Cocktails background"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-7xl font-serif mb-6">Craft Cocktails</h1>
          <p className="text-xl max-w-2xl text-center text-gray-100">
            Discover the art of mixology with our carefully curated collection
            of signature cocktails
          </p>
        </motion.div>
      </div>

      <HomeWrapper>
        {/* Search and Filter Section */}
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <motion.div
                  animate={{
                    scale: isSearchFocused ? 1.02 : 1,
                    boxShadow: isSearchFocused
                      ? "0 4px 20px rgba(0,0,0,0.1)"
                      : "none",
                  }}
                  className="relative"
                >
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search cocktails..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7B0323] transition-all"
                  />
                </motion.div>
              </div>

              <div className="flex gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedDifficulty === difficulty
                        ? "bg-[#7B0323] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cocktails Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <AnimatePresence>
              {filteredCocktails.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <Martini className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-xl text-gray-600">No cocktails found</h3>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredCocktails.map((cocktail, index) => (
                    <motion.div
                      key={cocktail.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                    >
                      <CocktailCard {...cocktail} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#7B0323] to-[#9B0C3C] rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div className="text-white">
                  <h2 className="text-3xl font-semibold mb-4">
                    Elevate Your Home Bar
                  </h2>
                  <p className="text-gray-100 mb-8">
                    From premium spirits to professional-grade tools, find
                    everything you need to craft the perfect cocktail experience
                    at home.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#7B0323] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Explore Products
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/bar-accessories.jpg"
                    fill
                    alt="Bar accessories"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </HomeWrapper>
    </div>
  );
};

export default Cocktails;
