import RecipeAjout from "./components/RecipeAjout";
import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";

import "./index.css";

function App() {
  return (
    <>
    <div className="recipe-container">
      <RecipeStep />
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
