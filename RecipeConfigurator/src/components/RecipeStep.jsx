import RecipeSelect from "./RecipeSelect";
const RecipeStep = () => {
  return (
    <div>
      <h2 className="recipe-subtitle">RECETTE:</h2>
      <div>
        <textarea className="recipe-textarea"></textarea>
        <RecipeSelect />
      </div>
    </div>
  );
};

export default RecipeStep;
