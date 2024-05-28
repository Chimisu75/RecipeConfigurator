import RecipeAjout from "./components/RecipeAjout";
import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";
import RecipeSubmitBtn from "./components/RecipeSubmitBtn";
import RecipeName from "./components/RecipeName";
import RecipeNbPeople from "./components/RecipeNbPeople";
import RecipeDifficulty from "./components/RecipeDifficulty";
import "./index.css";

function App() {
  return (
    <>
      <div className="recipe-container">
        <RecipeStep />
        <RecipeIngredient />
      </div>

      <RecipePhoto />

      <RecipeAjout />

      <RecipeSubmitBtn />
      <RecipeName />

      <RecipeNbPeople />
      <RecipeDifficulty />
    </>
  );
}

export default App;
