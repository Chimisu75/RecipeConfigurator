import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";
import RecipeSubmitBtn from "./components/RecipeSubmitBtn";
import RecipeName from "./components/RecipeName";
import RecipeNbPeople from "./components/RecipeNbPeople";

import RecipeAjoutIngredients from "./components/RecipeAjoutIngredients";
import "./index.css";
import { useState } from "react";

function App() {
  const [recipeSteps, setRecipeSteps] = useState([]);

  const handleAddRecipeStep = () => {
    const stepIndex = recipeSteps.length + 1;
    setRecipeSteps((prevSteps) => [
      ...prevSteps,
      <RecipeStep key={stepIndex} onAddStep={handleAddRecipeStep} />,
    ]);
  };
  return (
    <>
      <h1>Créer votre recette</h1>
      <div className="container">
        <section className="section1">
          <RecipeName />
          <h2 className="recipe-subtitle">RECETTE :</h2>
          {recipeSteps.map((step) => step)}
          <RecipeStep onAddStep={handleAddRecipeStep} />
          <div className="recipe-btn">
            <button
              className="recipe-btn-etape"
              type="button"
              onClick={handleAddRecipeStep}
            >
              + Ajouter une étape
            </button>
          </div>
        </section>

        <section className="section2">
          <RecipePhoto />
          <RecipeNbPeople />
          <h2 className="recipe-subtitle">INGREDIENTS : </h2>
          <RecipeIngredient />
          <RecipeAjoutIngredients />
        </section>
      </div>
      <RecipeSubmitBtn />
    </>
  );
}

export default App;
