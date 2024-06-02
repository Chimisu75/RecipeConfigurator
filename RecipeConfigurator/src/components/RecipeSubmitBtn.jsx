const RecipeSubmitBtn = ({ onSubmit }) => {
  return (
    <div className="recipe-submit-container">
      <button onClick={onSubmit} className="recipe-submit">
        Soumettre la recette
      </button>
    </div>
  );
};

export default RecipeSubmitBtn;
