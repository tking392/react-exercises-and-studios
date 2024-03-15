import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  let recipeImage = recipedata.map((data) => (
    <div key = {data.recipeImage} className = "recipeImage">
      <img src = {data.recipeImage} alt = {data.name} />;
    </div>
  ))
  return <div>{recipeImage}</div>;
}

 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 