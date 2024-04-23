const subCategoriesTable = [
  // Category 1: Appetizers
  {
    subCategoryId: 1,
    categoryId: 1,
    subCategoryName: "Stuffed Mushrooms",
    subCategoryDescription:
      "Savory stuffed mushrooms filled with a flavorful mixture.",
    subCategoryImage: "stuffed_mushrooms.jpg",
  },
  {
    subCategoryId: 2,
    categoryId: 1,
    subCategoryName: "Bruschetta",
    subCategoryDescription:
      "Classic Italian appetizer featuring toasted bread topped with tomatoes, basil, and garlic.",
    subCategoryImage: "bruschetta.jpg",
  },
  {
    subCategoryId: 3,
    categoryId: 1,
    subCategoryName: "Finger Foods",
    subCategoryDescription: "Delicious finger foods perfect for snacking.",
    subCategoryImage: "finger_foods.jpg",
  },
  {
    subCategoryId: 4,
    categoryId: 1,
    subCategoryName: "Dips and Spreads",
    subCategoryDescription:
      "Tasty dips and spreads to accompany your appetizers.",
    subCategoryImage: "dips_and_spreads.jpg",
  },
  {
    subCategoryId: 5,
    categoryId: 1,
    subCategoryName: "Cheese Boards",
    subCategoryDescription: "Assorted cheese boards for cheese lovers.",
    subCategoryImage: "cheese_boards.jpg",
  },
  {
    subCategoryId: 6,
    categoryId: 1,
    subCategoryName: "Seafood Appetizers",
    subCategoryDescription:
      "Delectable seafood appetizers to tantalize your taste buds.",
    subCategoryImage: "seafood_appetizers.jpg",
  },
  {
    subCategoryId: 7,
    categoryId: 1,
    subCategoryName: "Vegetarian Appetizers",
    subCategoryDescription: "Vegetarian appetizers packed with flavor.",
    subCategoryImage: "vegetarian_appetizers.jpg",
  },
  {
    subCategoryId: 8,
    categoryId: 1,
    subCategoryName: "Meat Appetizers",
    subCategoryDescription: "Savory meat appetizers for meat lovers.",
    subCategoryImage: "meat_appetizers.jpg",
  },
  {
    subCategoryId: 9,
    categoryId: 1,
    subCategoryName: "Bread Appetizers",
    subCategoryDescription:
      "Delicious bread-based appetizers to start your meal.",
    subCategoryImage: "bread_appetizers.jpg",
  },
  {
    subCategoryId: 10,
    categoryId: 1,
    subCategoryName: "Fruit Appetizers",
    subCategoryDescription: "Refreshing fruit-based appetizers.",
    subCategoryImage: "fruit_appetizers.jpg",
  },

  // Category 2: Salads
  {
    subCategoryId: 11,
    categoryId: 2,
    subCategoryName: "Green Salads",
    subCategoryDescription: "Fresh and crisp green salads.",
    subCategoryImage: "green_salads.jpg",
  },
  {
    subCategoryId: 12,
    categoryId: 2,
    subCategoryName: "Pasta Salads",
    subCategoryDescription: "Pasta salads loaded with flavor.",
    subCategoryImage: "pasta_salads.jpg",
  },
  {
    subCategoryId: 13,
    categoryId: 2,
    subCategoryName: "Fruit Salads",
    subCategoryDescription: "Sweet and refreshing fruit salads.",
    subCategoryImage: "fruit_salads.jpg",
  },
  {
    subCategoryId: 14,
    categoryId: 2,
    subCategoryName: "Grain Salads",
    subCategoryDescription: "Healthy grain-based salads.",
    subCategoryImage: "grain_salads.jpg",
  },
  {
    subCategoryId: 15,
    categoryId: 2,
    subCategoryName: "Protein Salads",
    subCategoryDescription: "Protein-packed salads for a filling meal.",
    subCategoryImage: "protein_salads.jpg",
  },
  {
    subCategoryId: 16,
    categoryId: 2,
    subCategoryName: "Vegetable Salads",
    subCategoryDescription: "Nutritious vegetable salads.",
    subCategoryImage: "vegetable_salads.jpg",
  },
  {
    subCategoryId: 17,
    categoryId: 2,
    subCategoryName: "Potato Salads",
    subCategoryDescription: "Classic potato salads.",
    subCategoryImage: "potato_salads.jpg",
  },
  {
    subCategoryId: 18,
    categoryId: 2,
    subCategoryName: "Seafood Salads",
    subCategoryDescription: "Sumptuous seafood salads.",
    subCategoryImage: "seafood_salads.jpg",
  },
  {
    subCategoryId: 19,
    categoryId: 2,
    subCategoryName: "Cheese Salads",
    subCategoryDescription: "Cheesy salads for cheese enthusiasts.",
    subCategoryImage: "cheese_salads.jpg",
  },
  {
    subCategoryId: 20,
    categoryId: 2,
    subCategoryName: "Bean Salads",
    subCategoryDescription: "Hearty bean-based salads.",
    subCategoryImage: "bean_salads.jpg",
  },

  // Category 3: Soups
  {
    subCategoryId: 21,
    categoryId: 3,
    subCategoryName: "Clear Soups",
    subCategoryDescription: "Light and clear soups.",
    subCategoryImage: "clear_soups.jpg",
  },
  {
    subCategoryId: 22,
    categoryId: 3,
    subCategoryName: "Creamy Soups",
    subCategoryDescription: "Rich and creamy soups.",
    subCategoryImage: "creamy_soups.jpg",
  },
  {
    subCategoryId: 23,
    categoryId: 3,
    subCategoryName: "Bisques",
    subCategoryDescription: "Velvety bisque soups.",
    subCategoryImage: "bisques.jpg",
  },
  {
    subCategoryId: 24,
    categoryId: 3,
    subCategoryName: "Vegetable Soups",
    subCategoryDescription: "Nutritious vegetable soups.",
    subCategoryImage: "vegetable_soups.jpg",
  },
  {
    subCategoryId: 25,
    categoryId: 3,
    subCategoryName: "Meat Soups",
    subCategoryDescription: "Hearty meat-based soups.",
    subCategoryImage: "meat_soups.jpg",
  },
  {
    subCategoryId: 26,
    categoryId: 3,
    subCategoryName: "Bean Soups",
    subCategoryDescription: "Satisfying bean soups.",
    subCategoryImage: "bean_soups.jpg",
  },
  {
    subCategoryId: 27,
    categoryId: 3,
    subCategoryName: "Seafood Soups",
    subCategoryDescription: "Flavorful seafood soups.",
    subCategoryImage: "seafood_soups.jpg",
  },
  {
    subCategoryId: 28,
    categoryId: 3,
    subCategoryName: "Noodle Soups",
    subCategoryDescription: "Noodle-based soups.",
    subCategoryImage: "noodle_soups.jpg",
  },
  {
    subCategoryId: 29,
    categoryId: 3,
    subCategoryName: "Chilled Soups",
    subCategoryDescription: "Refreshing chilled soups.",
    subCategoryImage: "chilled_soups.jpg",
  },
  {
    subCategoryId: 30,
    categoryId: 3,
    subCategoryName: "Specialty Soups",
    subCategoryDescription: "Specialty soups for the adventurous.",
    subCategoryImage: "specialty_soups.jpg",
  },

  // Category 4: Entrees
  {
    subCategoryId: 31,
    categoryId: 4,
    subCategoryName: "Meat Dishes",
    subCategoryDescription: "Delicious meat-based entrees.",
    subCategoryImage: "meat_dishes.jpg",
  },
  {
    subCategoryId: 32,
    categoryId: 4,
    subCategoryName: "Seafood Dishes",
    subCategoryDescription: "Exquisite seafood entrees.",
    subCategoryImage: "seafood_dishes.jpg",
  },
  {
    subCategoryId: 33,
    categoryId: 4,
    subCategoryName: "Vegetarian Dishes",
    subCategoryDescription: "Satisfying vegetarian entrees.",
    subCategoryImage: "vegetarian_dishes.jpg",
  },
  {
    subCategoryId: 34,
    categoryId: 4,
    subCategoryName: "Pasta Dishes",
    subCategoryDescription: "Delectable pasta entrees.",
    subCategoryImage: "pasta_dishes.jpg",
  },
  {
    subCategoryId: 35,
    categoryId: 4,
    subCategoryName: "Rice Dishes",
    subCategoryDescription: "Flavorful rice-based entrees.",
    subCategoryImage: "rice_dishes.jpg",
  },
  {
    subCategoryId: 36,
    categoryId: 4,
    subCategoryName: "Grilled Dishes",
    subCategoryDescription: "Juicy grilled entrees.",
    subCategoryImage: "grilled_dishes.jpg",
  },
  {
    subCategoryId: 37,
    categoryId: 4,
    subCategoryName: "Baked Dishes",
    subCategoryDescription: "Tasty baked entrees.",
    subCategoryImage: "baked_dishes.jpg",
  },
  {
    subCategoryId: 38,
    categoryId: 4,
    subCategoryName: "Fried Dishes",
    subCategoryDescription: "Crispy fried entrees.",
    subCategoryImage: "fried_dishes.jpg",
  },
  {
    subCategoryId: 39,
    categoryId: 4,
    subCategoryName: "Sauteed Dishes",
    subCategoryDescription: "Delicious sauteed entrees.",
    subCategoryImage: "sauteed_dishes.jpg",
  },
  {
    subCategoryId: 40,
    categoryId: 4,
    subCategoryName: "Stir-Fry Dishes",
    subCategoryDescription: "Sizzling stir-fry entrees.",
    subCategoryImage: "stir_fry_dishes.jpg",
  },

  // Category 5: Desserts
  {
    subCategoryId: 41,
    categoryId: 5,
    subCategoryName: "Cakes",
    subCategoryDescription: "Indulgent cakes for any occasion.",
    subCategoryImage: "cakes.jpg",
  },
  {
    subCategoryId: 42,
    categoryId: 5,
    subCategoryName: "Pies",
    subCategoryDescription: "Delicious pies with flaky crusts.",
    subCategoryImage: "pies.jpg",
  },
  {
    subCategoryId: 43,
    categoryId: 5,
    subCategoryName: "Cookies",
    subCategoryDescription: "Sweet and chewy cookies.",
    subCategoryImage: "cookies.jpg",
  },
  {
    subCategoryId: 44,
    categoryId: 5,
    subCategoryName: "Ice Creams",
    subCategoryDescription: "Creamy and refreshing ice creams.",
    subCategoryImage: "ice_creams.jpg",
  },
  {
    subCategoryId: 45,
    categoryId: 5,
    subCategoryName: "Puddings",
    subCategoryDescription: "Rich and comforting puddings.",
    subCategoryImage: "puddings.jpg",
  },
  {
    subCategoryId: 46,
    categoryId: 5,
    subCategoryName: "Pastries",
    subCategoryDescription: "Delicate and flaky pastries.",
    subCategoryImage: "pastries.jpg",
  },
  {
    subCategoryId: 47,
    categoryId: 5,
    subCategoryName: "Tarts",
    subCategoryDescription: "Buttery tarts with sweet fillings.",
    subCategoryImage: "tarts.jpg",
  },
  {
    subCategoryId: 48,
    categoryId: 5,
    subCategoryName: "Mousses",
    subCategoryDescription: "Light and airy mousses.",
    subCategoryImage: "mousses.jpg",
  },
  {
    subCategoryId: 49,
    categoryId: 5,
    subCategoryName: "Trifles",
    subCategoryDescription: "Layered trifles bursting with flavor.",
    subCategoryImage: "trifles.jpg",
  },
  {
    subCategoryId: 50,
    categoryId: 5,
    subCategoryName: "Souffles",
    subCategoryDescription: "Fluffy and decadent souffles.",
    subCategoryImage: "souffles.jpg",
  },

  // Category 6: Beverages
  {
    subCategoryId: 51,
    categoryId: 6,
    subCategoryName: "Hot Drinks",
    subCategoryDescription: "Hot and comforting beverages.",
    subCategoryImage: "hot_drinks.jpg",
  },
  {
    subCategoryId: 52,
    categoryId: 6,
    subCategoryName: "Cold Drinks",
    subCategoryDescription: "Refreshing cold beverages.",
    subCategoryImage: "cold_drinks.jpg",
  },
  {
    subCategoryId: 53,
    categoryId: 6,
    subCategoryName: "Juices",
    subCategoryDescription: "Freshly squeezed juices.",
    subCategoryImage: "juices.jpg",
  },
  {
    subCategoryId: 54,
    categoryId: 6,
    subCategoryName: "Mocktails",
    subCategoryDescription: "Non-alcoholic mocktails.",
    subCategoryImage: "mocktails.jpg",
  },
  {
    subCategoryId: 55,
    categoryId: 6,
    subCategoryName: "Milkshakes",
    subCategoryDescription: "Creamy and indulgent milkshakes.",
    subCategoryImage: "milkshakes.jpg",
  },
  {
    subCategoryId: 56,
    categoryId: 6,
    subCategoryName: "Smoothies",
    subCategoryDescription: "Healthy and refreshing smoothies.",
    subCategoryImage: "smoothies.jpg",
  },
  {
    subCategoryId: 57,
    categoryId: 6,
    subCategoryName: "Energy Drinks",
    subCategoryDescription: "Boost your energy with these drinks.",
    subCategoryImage: "energy_drinks.jpg",
  },
  {
    subCategoryId: 58,
    categoryId: 6,
    subCategoryName: "Cocktails",
    subCategoryDescription: "Classic and creative cocktails.",
    subCategoryImage: "cocktails.jpg",
  },
  {
    subCategoryId: 59,
    categoryId: 6,
    subCategoryName: "Beer",
    subCategoryDescription: "Variety of beers to quench your thirst.",
    subCategoryImage: "beer.jpg",
  },
  {
    subCategoryId: 60,
    categoryId: 6,
    subCategoryName: "Wine",
    subCategoryDescription: "Fine wines for every palate.",
    subCategoryImage: "wine.jpg",
  },

  // Category 7: Specials
  {
    subCategoryId: 61,
    categoryId: 7,
    subCategoryName: "Chef Specials",
    subCategoryDescription: "Special dishes crafted by our chef.",
    subCategoryImage: "chef_specials.jpg",
  },
  {
    subCategoryId: 62,
    categoryId: 7,
    subCategoryName: "Seasonal Specials",
    subCategoryDescription: "Special dishes featuring seasonal ingredients.",
    subCategoryImage: "seasonal_specials.jpg",
  },
  {
    subCategoryId: 63,
    categoryId: 7,
    subCategoryName: "Vegetarian Specials",
    subCategoryDescription: "Special vegetarian dishes.",
    subCategoryImage: "vegetarian_specials.jpg",
  },
  {
    subCategoryId: 64,
    categoryId: 7,
    subCategoryName: "Gluten-Free Specials",
    subCategoryDescription: "Special dishes without gluten.",
    subCategoryImage: "gluten_free_specials.jpg",
  },
  {
    subCategoryId: 65,
    categoryId: 7,
    subCategoryName: "Dairy-Free Specials",
    subCategoryDescription: "Special dishes without dairy.",
    subCategoryImage: "dairy_free_specials.jpg",
  },
  {
    subCategoryId: 66,
    categoryId: 7,
    subCategoryName: "Vegan Specials",
    subCategoryDescription: "Special dishes suitable for vegans.",
    subCategoryImage: "vegan_specials.jpg",
  },
  {
    subCategoryId: 67,
    categoryId: 7,
    subCategoryName: "Keto Specials",
    subCategoryDescription: "Special dishes for a keto-friendly diet.",
    subCategoryImage: "keto_specials.jpg",
  },
  {
    subCategoryId: 68,
    categoryId: 7,
    subCategoryName: "Low Calorie Specials",
    subCategoryDescription: "Special dishes with low calorie counts.",
    subCategoryImage: "low_calorie_specials.jpg",
  },
  {
    subCategoryId: 69,
    categoryId: 7,
    subCategoryName: "Low Carb Specials",
    subCategoryDescription: "Special dishes with low carb content.",
    subCategoryImage: "low_carb_specials.jpg",
  },
  {
    subCategoryId: 70,
    categoryId: 7,
    subCategoryName: "Low Fat Specials",
    subCategoryDescription: "Special dishes with low fat content.",
    subCategoryImage: "low_fat_specials.jpg",
  },

  // Category 8: Kids Menu
  {
    subCategoryId: 71,
    categoryId: 8,
    subCategoryName: "Kids Favorites",
    subCategoryDescription: "Favorites among our younger guests.",
    subCategoryImage: "kids_favorites.jpg",
  },
  {
    subCategoryId: 72,
    categoryId: 8,
    subCategoryName: "Healthy Choices",
    subCategoryDescription: "Healthy options for kids.",
    subCategoryImage: "healthy_choices.jpg",
  },
  {
    subCategoryId: 73,
    categoryId: 8,
    subCategoryName: "Playful Plates",
    subCategoryDescription: "Playful and fun plates for kids.",
    subCategoryImage: "playful_plates.jpg",
  },
  {
    subCategoryId: 74,
    categoryId: 8,
    subCategoryName: "Sweet Treats",
    subCategoryDescription: "Delicious treats for kids.",
    subCategoryImage: "sweet_treats.jpg",
  },
  {
    subCategoryId: 75,
    categoryId: 8,
    subCategoryName: "Drinks",
    subCategoryDescription: "Variety of drinks for kids.",
    subCategoryImage: "drinks.jpg",
  },
];

export default subCategoriesTable;