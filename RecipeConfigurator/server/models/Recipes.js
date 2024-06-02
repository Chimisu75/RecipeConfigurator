const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [ingredientSchema], required: true },
  totalTime: { type: Number, required: true },
  nbPeople: { type: Number, required: true },
});

const RecipeModel = mongoose.model("Recipes", recipeSchema);
module.exports = RecipeModel;
