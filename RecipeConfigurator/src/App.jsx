import RecipePhoto from "./components/RecipePhoto";
import RecipeStep from "./components/RecipeStep";
import RecipeIngredient from "./components/RecipeIngredient";
import RecipeSubmitBtn from "./components/RecipeSubmitBtn";
import RecipeName from "./components/RecipeName";
import RecipeNbPeople from "./components/RecipeNbPeople";
import "./index.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const etapesRef = useRef([]);
  const [etapes, setEtapes] = useState([]);
  const nextIdRef = useRef(1);
  const [time, setTime] = useState({ totalTime: 0 });

  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = () => {
    const newIngredient = { id: ingredients.length + 1, name: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleDeleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const recipeNameRef = useRef("");
  const [recipeName, setRecipeName] = useState("");

  const ingredientsRef = useRef([]);
  const [update, setUpdate] = useState(false);

  const handleUpdateRecipeName = (newName) => {
    recipeNameRef.current = newName;
    setRecipeName(newName);
  };

  const handleAddEtape = () => {
    const newEtape = { id: nextIdRef.current, name: "", time: 0 };
    etapesRef.current.push(newEtape);
    nextIdRef.current += 1;
    setEtapes([...etapesRef.current]);
  };

  const handleDeleteEtape = (id) => {
    etapesRef.current = etapesRef.current.filter((etape) => etape.id !== id);
    setEtapes([...etapesRef.current]);
  };

  const updateStep = (id, name) => {
    const etape = etapesRef.current.find((etape) => etape.id === id);
    if (etape) {
      etape.name = name;
    }
    setEtapes([...etapesRef.current]);
  };

  // time
  const updateStepTime = (id, newTime) => {
    const etape = etapesRef.current.find((etape) => etape.id === id);
    if (etape) {
      etape.time = Number(newTime);
    }
    setEtapes([...etapesRef.current]);
  };
  useEffect(() => {
    const calculateTotalTime = () => {
      const totalTime = etapesRef.current.reduce(
        (acc, etape) => acc + Number(etape.time),
        0
      );
      setTime({ totalTime });
    };
    calculateTotalTime();
  }, [etapes]);

  return (
    <>
      <article className="article1">
        <h1>Créer votre recette</h1>
        <div className="container">
          <section className="section1">
            <RecipeName updateRecipeName={handleUpdateRecipeName} />
            <h2 className="recipe-subtitle">RECETTE :</h2>
            {etapes.map((etape) => (
              <RecipeStep
                key={etape.id}
                etape={etape}
                onDelete={handleDeleteEtape}
                updateStep={updateStep}
                updateTime={updateStepTime}
              />
            ))}
            <div className="recipe-btn">
              <button
                className="recipe-btn-ingredient"
                type="button"
                onClick={handleAddEtape}
              >
                {" "}
                + Ajouter une étape
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

        {/*  Affichage */}
      </article>
      <article className="article2">
        <div className="container">
          <section className="section3">
            <h2>{recipeName}</h2>
            <div className="recipe-info">
              <div>
                <img
                  className="recipe-icone"
                  src="/src/assets/imgTemps.png"
                  alt=""
                />
                <div>
                  <div>
                    <div>
                      <p>
                        {time.totalTime !== undefined
                          ? `${time.totalTime} minutes`
                          : "Calcul en cours..."}
                      </p>
                    </div>
                  </div>
                </div>
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
              {etapes.map((etape, index) => (
                <div key={etape.id}>
                  <h3>Étape {index + 1}</h3>
                  <p>{etape.name}</p>
                </div>
              ))}
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
            </div>
          </section>
        </div>
        <h1>Bon appétit !</h1>
      </article>
    </>
  );
}

export default App;
