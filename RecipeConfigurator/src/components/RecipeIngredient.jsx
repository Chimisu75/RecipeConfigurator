const RecipeIngredient = ({ ingredient, onChange, onDelete }) => {
  return (
    <div className="recipe-ingredient-container">
      <label className="recipe-ingredient-label">
        <div className="recipe-textarea-btn">
          <textarea
            className="recipe-textarea"
            placeholder="Ajouter un ingrédient"
            value={ingredient.name}
            onChange={(e) =>
              onChange(ingredient.id, e.target.value, ingredient.cost)
            }
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
            value={ingredient.cost}
            onChange={(e) =>
              onChange(ingredient.id, ingredient.name, e.target.value)
            }
          />
        </div>
      </label>
    </div>
  );
};

export default RecipeIngredient;
