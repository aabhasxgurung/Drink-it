import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CocktailCard from "./CocktailCard";

const FeaturedCoctails = () => {
  const featuredCocktails = [
    {
      id: "1",
      name: "Classic Old Fashioned",
      description:
        "A timeless cocktail that highlights the flavors of quality whiskey.",
      ingredients: [
        "2 oz Aged Whiskey Reserve",
        "1 sugar cube",
        "2-3 dashes Angostura bitters",
        "Orange peel",
        "Ice cubes",
      ],
      instructions: [
        "Place sugar cube in glass and saturate with bitters",
        "Add a splash of water and muddle",
        "Add ice cubes and whiskey",
        "Stir gently",
        "Garnish with orange peel",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      difficulty: "Easy" as "Easy" | "Medium" | "Advanced",
    },
    {
      id: "2",
      name: "Botanical Gin Fizz",
      description:
        "A refreshing, effervescent cocktail perfect for summer evenings.",
      ingredients: [
        "2 oz Botanical Gin",
        "1 oz fresh lemon juice",
        "3/4 oz simple syrup",
        "Club soda",
        "Lemon wheel",
        "Ice cubes",
      ],
      instructions: [
        "Add gin, lemon juice, and simple syrup to a shaker with ice",
        "Shake vigorously for 15 seconds",
        "Strain into a collins glass filled with ice",
        "Top with club soda",
        "Garnish with lemon wheel",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      difficulty: "Medium" as "Easy" | "Medium" | "Advanced",
    },
  ];
  return (
    <section className="section-padding bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-wine-50 text-wine-900 rounded-full text-sm font-medium mb-4">
              Mixology
            </span>
            <h2 className="text-[#7B0323] text-5xl font-serif z-50 text-center">
              Signature Cocktail Recipes
            </h2>
          </div>

          <Link
            href={"/cocktails"}
            className="inline-flex items-center text-wine-900 font-medium mt-4 md:mt-0 hover:text-wine-700 transition-colors hover-link"
          >
            Explore all recipes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} {...cocktail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoctails;
