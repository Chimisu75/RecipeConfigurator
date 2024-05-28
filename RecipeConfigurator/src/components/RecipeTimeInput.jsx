import { useState } from "react";

const RecipeTimeInput = () => {
  const [timeValue, setTimeValue] = useState(1);

  const handleTimeValue = (event) => {
    setTimeValue(event.target.value);
  };

  return (
    <div className="containerSelect">
      <label htmlFor="recipe-select">
        Temps en min
        <input
          name="recipe-select"
          value={timeValue}
          onChange={handleTimeValue}
        />
      </label>
    </div>
  );
};

export default RecipeTimeInput;
