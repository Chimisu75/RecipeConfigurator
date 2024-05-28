import RecipeTimeInput from "./RecipeTimeInput";
const RecipeStep = () => {
  return (
    <div>
      <h2 className="recipe-subtitle">RECETTE:</h2>
      <div>
        <textarea className="recipe-textarea"></textarea>
        <RecipeTimeInput />
      </div>
    </div>
  );
};

export default RecipeStep;
