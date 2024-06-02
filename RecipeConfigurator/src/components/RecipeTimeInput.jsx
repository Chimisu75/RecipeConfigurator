import { useState } from "react";

const RecipeTimeInput = ({ onTimeChange }) => {
  const [timeValue, setTimeValue] = useState(1);

  const handleTimeValue = (event) => {
    setTimeValue(event.target.value);
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
          value={timeValue}
          onChange={handleTimeValue}
        />
      </label>
    </div>
  );
};

export default RecipeTimeInput;
