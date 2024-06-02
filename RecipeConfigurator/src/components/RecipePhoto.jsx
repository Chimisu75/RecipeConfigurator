import { useState } from "react";

const RecipePhoto = ({ onPhotoChange }) => {
  const [photoUrl, setPhotoUrl] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const url = reader.result;
      setPhotoUrl(url);
      onPhotoChange(url); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


    return(
        <div className="recipe-container-photo">
        {photoUrl ? (
            <img className="recipe-img-recette" src={photoUrl} alt="Recette" />
          ) : (
            <input
              className="recipe-ajout-photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          )}
          </div>
    );
};

export default RecipePhoto;

