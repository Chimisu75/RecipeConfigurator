const RecipeIngredient = ({ ingredient, onChange, onDelete }) => {
  const handleNameChange = (e) => {
    onChange(ingredient.id, e.target.value, ingredient.cost);
  };

  const handleCostChange = (e) => {
    onChange(ingredient.id, ingredient.name, e.target.value);
  };

  return (
    <div className="recipe-ingredient-container">
      <label className="recipe-ingredient-label">
        <div className="recipe-textarea-btn">
          <textarea
            className="recipe-textarea"
            placeholder="Ajouter un ingrédient"
            value={ingredient.name}
            onChange={handleNameChange}
          ></textarea>
          <button
            className="recipe-btn-ingredient-delete"
            onClick={() => onDelete(ingredient.id)}
          >
            x
          </button>
        </div>
        <div className="recipe-controls">
          <input
            type="number"
            className="recipe-ingredient-cost"
            placeholder="Coût"
            value={ingredient.cost || ""}
            onChange={handleCostChange}
            min="0"
          />
        </div>
      </label>
    </div>
  );
};

export default RecipeIngredient;
