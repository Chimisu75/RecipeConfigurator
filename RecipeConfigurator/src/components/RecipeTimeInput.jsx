const RecipeTimeInput = ({ time, onTimeChange }) => {
  const handleTimeValue = (event) => {
    const value = event.target.value;
    if (value >= 0) {
      onTimeChange(value);
    }
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
          min="0"
          value={time}
          onChange={handleTimeValue}
        />
      </label>
    </div>
  );
};

export default RecipeTimeInput;
