const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RecipeModel = require("./models/Recipes.js");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://recipeDB:recipePassword@cluster0.y7hzq76.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust timeout as needed
    }
  )
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });

// GET method to retrieve all recipes
app.get("/getRecipes", async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST method to add a new recipe
app.post("/addRecipe", async (req, res) => {
  console.log("Received POST request on /addRecipe with data:", req.body);
  const newRecipe = new RecipeModel(req.body);
  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    console.error("Error saving recipe:", err.message);
    res.status(400).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
