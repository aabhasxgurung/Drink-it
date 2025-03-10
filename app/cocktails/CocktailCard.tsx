"use client";
import { useState } from "react";

interface CocktailCardProps {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  difficulty: "Easy" | "Medium" | "Advanced";
}

const CocktailCard = ({
  name,
  description,
  ingredients,
  instructions,
  imageUrl,
  difficulty,
}: CocktailCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Difficulty color mapping
  const difficultyColor = {
    Easy: "bg-green-50 text-green-700",
    Medium: "bg-amber-50 text-amber-700",
    Advanced: "bg-red-50 text-red-700",
  };

  return (
    <div
      className={`bg-white glass rounded-xl overflow-hidden transition-all duration-300 ${
        isExpanded ? "elegant-shadow-lg" : "elegant-shadow"
      }`}
    >
      {/* Image */}
      <div className="h-64 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Difficulty tag */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${difficultyColor[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-wine-900 text-sm font-medium hover:text-wine-700 transition-colors focus:outline-none mb-2"
        >
          {isExpanded ? "Show less" : "Show recipe"}
        </button>

        {/* Expandable content */}
        {isExpanded && (
          <div className="mt-4 animate-fade-in">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Ingredients:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 pl-5 list-disc">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Instructions:
              </h4>
              <ol className="text-sm text-gray-600 space-y-2 pl-5 list-decimal">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailCard;
