import { useState } from "react";

const RecipeIngredient = ({ ingredient, onDelete }) => {
  return (
    <div className="recipe-ingredient-container">
      <label className="recipe-ingredient-label">
        <div className="recipe-textarea-btn">
          <textarea
            className="recipe-textarea"
            placeholder="Ajouter un ingrédient"
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
          />
        </div>
      </label>
    </div>
  );
};

export default RecipeIngredient;
