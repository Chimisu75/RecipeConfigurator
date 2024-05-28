function RecipeIngredient() {
  return (
    <div className="recipe-ingredient-container">
      <label className="recipe-ingredient-label">
        <textarea
          className="recipe-textarea"
          placeholder="Ajouter un ingrédient"
        ></textarea>
        <span>
          Coût
          <input type="number" className="recipe-ingredient-cost" />
        </span>
      </label>
    </div>
  );
}

export default RecipeIngredient;
