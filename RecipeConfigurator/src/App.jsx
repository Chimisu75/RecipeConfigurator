import RecipeAjout from "./components/RecipeAjoutEtapes";
import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";
import RecipeSubmitBtn from "./components/RecipeSubmitBtn";
import RecipeName from "./components/RecipeName";
import RecipeNbPeople from "./components/RecipeNbPeople";
import RecipeDifficulty from "./components/RecipeDifficulty";
import RecipeAjoutEtapes from "./components/RecipeAjoutEtapes";
import RecipeAjoutIngredients from "./components/RecipeAjoutIngredients";
import "./index.css";

function App() {
  return (
    <>
  <h1>Créer votre recette</h1>
  <div className="container">
    <section className="section1">
      <RecipeName />
      <h2 className="recipe-subtitle">RECETTE :</h2>
      <RecipeStep />
      <RecipeStep />
      <RecipeAjoutEtapes />
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
