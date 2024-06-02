import { useRef } from "react";

function RecipeName({ updateRecipeName }) {
  const inputRef = useRef(null);
  const handleChange = () => {
    if (inputRef.current) {
      updateRecipeName(inputRef.current.value);
    }
  };
  return (
    <input
      ref={inputRef}
      className="recipe-nom"
      type="text"
      placeholder="Nom de votre recette"
      onChange={handleChange}
    />
  );
}

export default RecipeName;
