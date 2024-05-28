import { useState } from "react";

const RecipeSelect = () => {
  const [timeValue, setTimeValue] = useState(1);

  const handleTimeValue = (event) => {
    setTimeValue(event.target.value);
  };

  return (
    <div className="containerSelect">
      <label htmlFor="recipe-select">
        Temps en min
        <select
          name="recipe-select"
          value={timeValue}
          onChange={handleTimeValue}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
  );
};

export default RecipeSelect;
