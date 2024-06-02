const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
});

const stepSchema = new mongoose.Schema({
  text: { type: String, required: true },
  time: { type: Number, required: true },
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [ingredientSchema], required: true },
  totalTime: { type: Number, required: true },
  nbPeople: { type: Number, required: true },
  steps: { type: [stepSchema], required: true },
  photo: { type: String },
  difficulty: { type: String, required: true },
});

const RecipeModel = mongoose.model("Recipe", recipeSchema);
module.exports = RecipeModel;
