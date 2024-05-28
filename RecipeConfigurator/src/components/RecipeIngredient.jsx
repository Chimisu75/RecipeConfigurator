function RecipeIngredient() {
  return (
    <div className="recipe-ingredient-container">
      <label className="recipe-ingredient-label">
        <textarea
          className="recipe-textarea"
          placeholder="Ajouter un ingrédient"
        ></textarea>
        <div className="recipe-controls">
        <input type="number" className="recipe-ingredient-cost" placeholder="Coût"/>
        </div>
      </label>
    </div>
  );
}

export default RecipeIngredient;
