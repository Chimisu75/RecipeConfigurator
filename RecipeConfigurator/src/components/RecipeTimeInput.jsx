
const RecipeTimeInput = ({ time, onTimeChange }) => {
  const handleTimeValue = (event) => {
    onTimeChange(event.target.value);
  };

  return (
    <div className="containerSelect">
      <label htmlFor="recipe-select">
        Temps (min) : 
        <br />
        <input
          className="recipe-select-time"
          name="recipe-select"
          type="number"
          value={time}
          onChange={handleTimeValue}
        />
      </label>
    </div>
  );
};

export default RecipeTimeInput;
