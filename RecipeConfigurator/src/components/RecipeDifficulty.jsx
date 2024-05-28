function RecipeDifficulty() {
  return (
    <>
      <label htmlFor="difficulty-select">Choisissez une difficulté:</label>
      <select>
        <option value="Facile">Facile</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Avancé">Avancé</option>
      </select>
    </>
  );
}

export default RecipeDifficulty;
