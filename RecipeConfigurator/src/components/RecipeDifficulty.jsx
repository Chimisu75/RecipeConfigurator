
function RecipeDifficulty({ onChangeDifficulty }) {
  const handleDifficultyChange = (event) => {
    onChangeDifficulty(event.target.value);
  };

  return (
    <>
      <label className="recipe-difficulty" htmlFor="difficulty-select">
        Difficulté :
      </label>
      <select
        className="recipe-difficulty-select"
        onChange={handleDifficultyChange}
      >
        <option value="Facile">Facile</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Avancé">Avancé</option>
      </select>
    </>
  );
}

export default RecipeDifficulty;