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
  const [ingredients, setIngredients] = useState([]);
  const [nbPeople, setNbPeople] = useState(1); 
  const [photoUrl, setPhotoUrl] = useState('');
  const [difficulty, setDifficulty] = useState("Facile");



  // étapes
  const handleAddEtape = () => {
    const newEtape = { id: etapes.length + 1, name: "" };
    setEtapes([...etapes, newEtape]);
  };

  const handleDeleteEtape = (id) => {
    setEtapes(etapes.filter(etape => etape.id !== id));
  };

  // difficulté
  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  };

  // ingrédients
  const handleAddIngredient = () => {
    const newIngredient = { id: ingredients.length + 1, name: "", cost: 0 };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  };

  const handleIngredientChange = (id, name, cost) => { 
    setIngredients(ingredients.map(ingredient => (
      ingredient.id === id ? { ...ingredient, name, cost } : ingredient
    )));
  };

  // nb de personnes
  const handleNbPeopleChange = (value) => {
    setNbPeople(Number(value)); 
  };

  //coût
  const totalCost = ingredients.reduce((acc, ingredient) => acc + Number(ingredient.cost), 0);
    let costCategory;

      if (totalCost <= 5) {
        costCategory = "Bon marché";
      } else if (totalCost <= 15) {
        costCategory = "Correct";
      } else {
        costCategory = "Assez cher";
      }


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
                onChangeDifficulty={handleDifficultyChange}
              />
            ))}
            <div className="recipe-btn">
              <button className="recipe-btn-ingredient" type="button" onClick={handleAddEtape}> + Ajouter une étape</button>
            </div>
          </section>
          <section className="section2">
            <RecipePhoto onPhotoChange={setPhotoUrl} /> 
            <RecipeNbPeople 
              nbPeople={nbPeople} 
              onChange={handleNbPeopleChange} 
            />
            <h2 className="recipe-subtitle">INGREDIENTS :</h2>
            {ingredients.map((ingredient) => (
              <RecipeIngredient
                key={ingredient.id}
                ingredient={ingredient}
                onChange={handleIngredientChange}
                onDelete={handleDeleteIngredient}
                totalCost={totalCost}
              />
            ))}
            <div className="recipe-btn">
              <button className="recipe-btn-ingredient" type="button" onClick={handleAddIngredient}> + Ajouter un ingrédient</button>
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
                <img className="recipe-icone" src="/src/assets/imgTemps.png" alt="" />
                <p>25 min</p>
              </div>
              <div>
                <img className="recipe-icone" src="/src/assets/imgDifficulte.png" alt="" />
                <p>{difficulty}</p>
              </div>
              <div>
                <img className="recipe-icone" src="/src/assets/imgCout.png" alt="" />
                <p>{costCategory}</p>
              </div>
            </div>
            <div className="recipe-recette-etapes">
              <div className="recipe-etape-1">
                <h3>Etape 1</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore temporibus eaque molestiae excepturi dolor, at aliquam maiores incidunt ipsam et esse aperiam consequuntur hic? Sit hic ratione ipsam exercitationem culpa!</p>
              </div>
              <div className="recipe-etape-2">
                <h3>Etape 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore temporibus eaque molestiae excepturi dolor, at aliquam maiores incidunt ipsam et esse aperiam consequuntur hic? Sit hic ratione ipsam exercitationem culpa!</p>
              </div>
            </div>
          </section>
          <section className="section4">
          {photoUrl ? (
            <img className="recipe-img-recette" src={photoUrl} alt="Recette" />
          ) : (
            <img className="recipe-img-recette" src="/src/assets/coockies.jpg" alt="Placeholder" />
          )}
            <div>
              <h3>Nombre de personnes : {nbPeople}</h3>
              <div>
                {ingredients.map((ingredient, index) => (
                  <p key={index}>{ingredient.name}</p>
                ))}
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



