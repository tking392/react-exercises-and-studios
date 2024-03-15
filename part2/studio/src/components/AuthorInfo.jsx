import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  let authorName = recipedata.map((data) => (
    <div key = {data.name}>
      <h1>{data.author}</h1>
    </div>
  ))

  let authorImage = recipedata.map((data) => (
    <div key = {data.name}>
      <img src = {data.authorImage} alt = {Date.authorName} />
    </div>
  ))

  let authorWebsite = recipedata.map((data) => (
    <div key = {data.name}>
      <a href = {data.website}>{data.author}</a>
    </div>
  ))

  return <div>
  {authorImage}
  {authorName}
  {authorWebsite}
  </div>

 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 