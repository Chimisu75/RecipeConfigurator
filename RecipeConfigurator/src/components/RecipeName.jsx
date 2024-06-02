function RecipeName({ recipeName, onRecipeNameChange }) {
  const handleNameChange = (event) => {
    onRecipeNameChange(event.target.value);
  };

  return (
    <input
      className="recipe-nom"
      type="text"
      placeholder="Nom de votre recette"
      value={recipeName}
      onChange={handleNameChange}
    />
  );
}

export default RecipeName;
