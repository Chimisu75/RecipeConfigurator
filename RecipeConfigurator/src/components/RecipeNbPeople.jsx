const RecipeNbPeople = ({ nbPeople, onChange }) => {
  return (

        <input
          type="number"
          className="recipe-nb-people"
          value={nbPeople} 
          onChange={(e) => onChange(e.target.value)}
        />

  );
};

export default RecipeNbPeople;

