import RecipeAjout from "./components/RecipeAjout";
import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";

import "./index.css";

function App() {
  return (
    <>
      <div className="recipe-container">
        <RecipeStep />
        <RecipeIngredient />
      </div>
      <div>
        <RecipePhoto />
      </div>
      <div>
        <RecipeAjout />
      </div>
    </>
  );
}

export default App;
