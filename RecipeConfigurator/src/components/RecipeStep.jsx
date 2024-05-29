import RecipeTimeInput from "./RecipeTimeInput";
import RecipeDifficulty from "./RecipeDifficulty";
const RecipeStep = () => {
  return (
    <div>
      <div className="recipe-step-container">
        <div className="recipe-textarea-btn">
        <textarea
          className="recipe-textarea-etape"
          placeholder="Ajoutez une étape"
        ></textarea>
        <button className="recipe-btn-delete">x</button>
        </div>
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
