const RecipeNbPeople = ({ nbPeople, onChange }) => {
  return (
    <>
      <h2 className="recipe-subtitle">Nombre de personnes</h2>
      <input
        type="number"
        className="recipe-nb-people"
        value={nbPeople}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default RecipeNbPeople;
