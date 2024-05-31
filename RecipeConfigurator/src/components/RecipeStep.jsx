import RecipeTimeInput from "./RecipeTimeInput";
import RecipeDifficulty from "./RecipeDifficulty";
import { useState, useRef, useEffect } from "react";
const RecipeStep = ({ etape, onDelete, updateStep, updateTime }) => {
  const [totalTime, setTotalTime] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && etape && etape.name) {
      inputRef.current.value = etape.name;
    }
  }, [etape]);

  const handleBlur = () => {
    if (inputRef.current) {
      updateStep(etape.id, inputRef.current.value);
    }
  };

  const handleTimeChange = (newTime) => {
    setTotalTime(parseInt(newTime, 10));
    updateTime(etape.id, newTime);
  };

  return (
    <div>
      <div className="recipe-step-container">
        <div className="recipe-textarea-btn">
          <textarea
            className="recipe-textarea-etape"
            placeholder="Ajoutez une étape"
            ref={inputRef}
            onBlur={handleBlur}
          ></textarea>
          <button
            className="recipe-btn-delete"
            onClick={() => onDelete(etape.id)}
          >
            x
          </button>
        </div>
        <div className="recipe-controls">
          <RecipeTimeInput onTimeChange={handleTimeChange} />
          <br />
          <RecipeDifficulty />
        </div>
      </div>
    </div>
  );
};

export default RecipeStep;
