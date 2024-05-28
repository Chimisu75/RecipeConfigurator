import RecipeIngredient from "./components/RecipeIngredient";
import RecipeStep from "./components/RecipeStep";

import "./index.css";

function App() {
  return (
    <div className="recipe-container">
      <RecipeStep />
      <RecipeIngredient />
    </div>
  );
}

export default App;
