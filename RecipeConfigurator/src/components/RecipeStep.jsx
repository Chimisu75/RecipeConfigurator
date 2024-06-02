import RecipeTimeInput from "./RecipeTimeInput";
import RecipeDifficulty from "./RecipeDifficulty";

const RecipeStep = ({
  etape,
  onDelete,
  onChangeDifficulty,
  onEtapeChange,
  onTimeChange,
}) => {
  const handleTextChange = (event) => {
    onEtapeChange(etape.id, event.target.value);
  };

  const handleTimeChange = (time) => {
    onTimeChange(etape.id, time);
  };
  return (
    <div>
      <div className="recipe-step-container">
        <div className="recipe-textarea-btn">
          <textarea
            className="recipe-textarea-etape"
            placeholder="Ajoutez une étape"
            value={etape.text}
            onChange={handleTextChange}
          ></textarea>
          <button
            className="recipe-btn-delete"
            onClick={() => onDelete(etape.id)}
          >
            x
          </button>
        </div>
        <div className="recipe-controls">
          <RecipeTimeInput time={etape.time} onTimeChange={handleTimeChange} />
          <br />
          <RecipeDifficulty onChangeDifficulty={onChangeDifficulty} />
        </div>
      </div>
    </div>
  );
};

export default RecipeStep;
