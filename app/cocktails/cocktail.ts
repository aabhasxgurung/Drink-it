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

export const cocktailsData: CocktailData[] = [
  {
    id: "1",
    name: "Negroni",
    description: "A timeless cocktail made with Gin, and sugar.",
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
    imageUrl: "/sula/featuredHapusa.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Whiskey",
  },
];
