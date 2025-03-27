"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Wine } from "lucide-react";
import CocktailCard from "./CocktailCard";

// Define the cocktail data type
type Difficulty = "Easy" | "Medium" | "Advanced";

interface CocktailData {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  difficulty: Difficulty;
  category: string;
  base: string;
}

const cocktailsData: CocktailData[] = [
  {
    id: "1",
    name: "Classic Old Fashioned",
    description: "A timeless cocktail made with whiskey, bitters, and sugar.",
    ingredients: [
      "2 oz Bourbon or Rye Whiskey",
      "1 Sugar Cube",
      "2-3 dashes Angostura Bitters",
      "Orange Peel for garnish",
      "Ice Cubes",
    ],
    instructions: [
      "Place a sugar cube in an Old Fashioned glass",
      "Add 2-3 dashes of Angostura bitters onto the sugar cube",
      "Add a small splash of water and muddle until the sugar is dissolved",
      "Add ice cubes to the glass",
      "Pour bourbon or rye whiskey over the ice",
      "Gently stir to combine",
      "Garnish with an orange peel, expressing the oils over the drink before adding",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1583418855871-99809403d8e5?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Easy",
    category: "Classic",
    base: "Whiskey",
  },
  {
    id: "2",
    name: "Negroni",
    description: "A perfectly balanced, bitter Italian cocktail.",
    ingredients: [
      "1 oz Gin",
      "1 oz Campari",
      "1 oz Sweet Vermouth",
      "Orange Peel for garnish",
    ],
    instructions: [
      "Add gin, Campari, and sweet vermouth to a mixing glass filled with ice",
      "Stir well until chilled",
      "Strain into a rocks glass filled with fresh ice",
      "Garnish with an orange peel",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Easy",
    category: "Classic",
    base: "Gin",
  },
  {
    id: "3",
    name: "Smoked Maple Manhattan",
    description:
      "A rich variation of the classic Manhattan with smoky notes and maple sweetness.",
    ingredients: [
      "2 oz Bourbon or Rye Whiskey",
      "1 oz Sweet Vermouth",
      "2 dashes Angostura Bitters",
      "1/4 oz Maple Syrup",
      "Cherry for garnish",
    ],
    instructions: [
      "Chill a coupe glass with ice",
      "In a mixing glass, combine whiskey, vermouth, bitters, and maple syrup with ice",
      "Stir well until chilled, about 30 seconds",
      "Discard ice from coupe glass",
      "Strain the cocktail into the chilled glass",
      "Garnish with a cherry",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1638990742994-c96e4f7617fe?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Medium",
    category: "Modern",
    base: "Whiskey",
  },
  {
    id: "4",
    name: "French 75",
    description:
      "An elegant, sparkling cocktail with gin, lemon, and champagne.",
    ingredients: [
      "1 oz Gin",
      "1/2 oz Fresh Lemon Juice",
      "1/2 oz Simple Syrup",
      "3 oz Champagne or Sparkling Wine",
      "Lemon Twist for garnish",
    ],
    instructions: [
      "Add gin, lemon juice, and simple syrup to a shaker with ice",
      "Shake well until chilled",
      "Strain into a champagne flute",
      "Top with champagne or sparkling wine",
      "Garnish with a lemon twist",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1662267429391-452d3347cf0e?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Medium",
    category: "Classic",
    base: "Gin",
  },
  {
    id: "5",
    name: "Espresso Martini",
    description:
      "A sophisticated, coffee-flavored cocktail with a frothy finish.",
    ingredients: [
      "1.5 oz Vodka",
      "1 oz Fresh Espresso or Strong Coffee",
      "0.5 oz Coffee Liqueur",
      "0.5 oz Simple Syrup",
      "Coffee Beans for garnish",
    ],
    instructions: [
      "Add vodka, espresso, coffee liqueur, and simple syrup to a shaker with ice",
      "Shake vigorously for about 20 seconds to create a frothy consistency",
      "Strain into a chilled martini glass",
      "Garnish with 3 coffee beans",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1629987053929-1b83e985e3ba?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Medium",
    category: "Modern",
    base: "Vodka",
  },
  {
    id: "6",
    name: "Smoked Rosemary Paloma",
    description:
      "A refreshing tequila cocktail with grapefruit and smoked rosemary.",
    ingredients: [
      "2 oz Tequila Reposado",
      "1 oz Fresh Grapefruit Juice",
      "0.5 oz Fresh Lime Juice",
      "0.5 oz Agave Syrup",
      "Soda Water",
      "Fresh Rosemary Sprig",
      "Grapefruit Wedge for garnish",
      "Salt for rim (optional)",
    ],
    instructions: [
      "If desired, rim half of a highball glass with salt",
      "Burn the rosemary sprig with a kitchen torch to release the oils and aroma",
      "Place the smoked rosemary in the glass and add ice",
      "In a shaker, combine tequila, grapefruit juice, lime juice, and agave nectar with ice",
      "Shake well and strain into the prepared glass",
      "Top with soda water and gently stir",
      "Garnish with a grapefruit wedge",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1583227061267-8428fb76fb2d?q=80&w=1000&auto=format&fit=crop",
    difficulty: "Advanced",
    category: "Modern",
    base: "Tequila",
  },
];

const Cocktails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBase, setSelectedBase] = useState<string[]>([]);
  const [filteredCocktails, setFilteredCocktails] =
    useState<CocktailData[]>(cocktailsData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique values for filters
  const difficulties = Array.from(
    new Set(cocktailsData.map((c) => c.difficulty))
  );
  const categories = Array.from(new Set(cocktailsData.map((c) => c.category)));
  const bases = Array.from(new Set(cocktailsData.map((c) => c.base)));

  // Filter cocktails based on search and filter selections
  useEffect(() => {
    let filtered = cocktailsData;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (cocktail) =>
          cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cocktail.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          cocktail.ingredients.some((ing) =>
            ing.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Apply difficulty filter
    if (selectedDifficulty.length > 0) {
      filtered = filtered.filter((cocktail) =>
        selectedDifficulty.includes(cocktail.difficulty)
      );
    }

    // Apply category filter
    if (selectedCategory.length > 0) {
      filtered = filtered.filter((cocktail) =>
        selectedCategory.includes(cocktail.category)
      );
    }

    // Apply base filter
    if (selectedBase.length > 0) {
      filtered = filtered.filter((cocktail) =>
        selectedBase.includes(cocktail.base)
      );
    }

    setFilteredCocktails(filtered);
  }, [searchTerm, selectedDifficulty, selectedCategory, selectedBase]);

  const toggleDifficultyFilter = (difficulty: string) => {
    setSelectedDifficulty((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const toggleCategoryFilter = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleBaseFilter = (base: string) => {
    setSelectedBase((prev) =>
      prev.includes(base) ? prev.filter((b) => b !== base) : [...prev, base]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDifficulty([]);
    setSelectedCategory([]);
    setSelectedBase([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative pt-28 pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-wine-900/10 to-wine-900/5 z-0"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Craft Cocktail Collection
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated selection of premium cocktail recipes, from
              classic favorites to innovative creations. Each recipe is
              handcrafted to showcase the exceptional quality of our spirits.
            </p>
          </motion.div>
        </div>
      </section> */}
      <h1 className="text-[#7B0323] text-7xl font-serif z-50 text-center">
        Cocktails
      </h1>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search cocktails or ingredients"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-wine-900 focus:border-wine-900 transition-colors"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Difficulty Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Difficulty
                  </h3>
                  <div className="space-y-2">
                    {difficulties.map((difficulty) => (
                      <label
                        key={difficulty}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedDifficulty.includes(difficulty)}
                          onChange={() => toggleDifficultyFilter(difficulty)}
                          className="rounded border-gray-300 text-wine-900 focus:ring-wine-900"
                        />
                        <span className="text-sm text-gray-700">
                          {difficulty}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(category)}
                          onChange={() => toggleCategoryFilter(category)}
                          className="rounded border-gray-300 text-wine-900 focus:ring-wine-900"
                        />
                        <span className="text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Base Spirit Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Base Spirit
                  </h3>
                  <div className="space-y-2">
                    {bases.map((base) => (
                      <label
                        key={base}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBase.includes(base)}
                          onChange={() => toggleBaseFilter(base)}
                          className="rounded border-gray-300 text-wine-900 focus:ring-wine-900"
                        />
                        <span className="text-sm text-gray-700">{base}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-wine-900 hover:text-wine-800 focus:outline-none transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">
              {filteredCocktails.length === 1
                ? "1 recipe found"
                : `${filteredCocktails.length} recipes found`}
            </p>

            {(searchTerm ||
              selectedDifficulty.length > 0 ||
              selectedCategory.length > 0 ||
              selectedBase.length > 0) && (
              <button
                onClick={clearFilters}
                className="text-sm text-wine-900 hover:text-wine-800 focus:outline-none transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Cocktails Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {filteredCocktails.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCocktails.map((cocktail) => (
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
          ) : (
            <div className="text-center py-12">
              <Wine className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No cocktails found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find more
                recipes.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-wine-900 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
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

            <a
              href="/products"
              className="inline-block px-6 py-3 bg-wine-900 text-white font-medium rounded-lg hover:bg-wine-800 transition-colors"
            >
              See Products
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cocktails;
