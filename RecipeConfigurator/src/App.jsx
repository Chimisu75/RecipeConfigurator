import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";
import RecipeSubmitBtn from "./components/RecipeSubmitBtn";
import RecipeName from "./components/RecipeName";
import RecipeNbPeople from "./components/RecipeNbPeople";
import "./index.css";
import { useState } from "react";

function App() {
  const [etapes, setEtapes] = useState([]);

  const handleAddEtape = () => {
    const newEtape = { id: etapes.length + 1, name: "" };
    setEtapes([...etapes, newEtape]);
  };

  const handleDeleteEtape = (id) => {
    setEtapes(etapes.filter((etape) => etape.id !== id));
  };
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = () => {
    const newIngredient = { id: ingredients.length + 1, name: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  return (
    <>
      <article className="article1">
        <h1>Créer votre recette</h1>
        <div className="container">
          <section className="section1">
            <RecipeName />
            <h2 className="recipe-subtitle">RECETTE :</h2>
            {etapes.map((etape) => (
              <RecipeStep
                key={etape.id}
                etape={etape}
                onDelete={handleDeleteEtape}
              />
            ))}
            <div className="recipe-btn">
              <button
                className="recipe-btn-ingredient"
                type="button"
                onClick={handleAddEtape}
              >
                {" "}
                + Ajouter un ingrédient
              </button>
            </div>
          </section>
          <section className="section2">
            <RecipePhoto />
            <RecipeNbPeople />
            <h2 className="recipe-subtitle">INGREDIENTS : </h2>
            {ingredients.map((ingredient) => (
              <RecipeIngredient
                key={ingredient.id}
                ingredient={ingredient}
                onDelete={handleDeleteIngredient}
              />
            ))}
            <div className="recipe-btn">
              <button
                className="recipe-btn-ingredient"
                type="button"
                onClick={handleAddIngredient}
              >
                {" "}
                + Ajouter un ingrédient
              </button>
            </div>
          </section>
        </div>
        <RecipeSubmitBtn />
      </article>
      <article className="article2">
        <div className="container">
          <section className="section3">
            <h2>Nom de la recette</h2>
            <div className="recipe-info">
              <div>
                <img
                  className="recipe-icone"
                  src="/src/assets/imgTemps.png"
                  alt=""
                />
                <p>25 min</p>
              </div>
              <div>
                <img
                  className="recipe-icone"
                  src="/src/assets/imgDifficulte.png"
                  alt=""
                />
                <p>Facile</p>
              </div>
              <div>
                <img
                  className="recipe-icone"
                  src="/src/assets/imgCout.png"
                  alt=""
                />
                <p>Bon marché</p>
              </div>
            </div>
            <div className="recipe-recette-etapes">
              <div className="recipe-etape-1">
                <h3>Etape 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore temporibus eaque molestiae excepturi dolor, at aliquam
                  maiores incidunt ipsam et esse aperiam consequuntur hic? Sit
                  hic ratione ipsam exercitationem culpa!
                </p>
              </div>
              <div className="recipe-etape-2">
                <h3>Etape 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore temporibus eaque molestiae excepturi dolor, at aliquam
                  maiores incidunt ipsam et esse aperiam consequuntur hic? Sit
                  hic ratione ipsam exercitationem culpa!
                </p>
              </div>
            </div>
          </section>
          <section className="section4">
            <img
              className="recipe-img-recette"
              src="/src/assets/coockies.jpg"
              alt=""
            />
            <div>
              <h3>Nombre de personne : </h3>
              <div>
                <p>Ingrédient 1</p>
                <p>Ingrédient 2</p>
              </div>
            </div>
          </section>
        </div>
        <h1>Bon appétit !</h1>
      </article>
    </>
  );
}

export default App;
