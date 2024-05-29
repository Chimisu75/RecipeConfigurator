import RecipeTimeInput from "./RecipeTimeInput";
import RecipeDifficulty from "./RecipeDifficulty";

const RecipeStep = () => {
  return (
    <div>
      <div className="recipe-step-container">
        <textarea
          className="recipe-textarea-etape"
          placeholder="Ajoutez une étape"
        ></textarea>
        <div className="recipe-controls">
          <RecipeTimeInput />
          <br />
          <RecipeDifficulty />
        </div>
      </div>
    </div>
  );
};

export default RecipeStep;
