import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://tastesbetterfromscratch.com/";
    let authorPhoto = "https://secure.gravatar.com/avatar/dc0dc9ed2f606a1bde316b7fff89c9a8?s=320&d=mm&r=g";
    let authorName = "Lauren Allen";

return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Author: Lauren Allen" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Tastes Better From Scratch</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
            <div>
                <h1>Best EVER Biscuits and Gravy</h1>
                <p>&#10077;An easy, southern-style sausage gravy with flaky homemade biscuits makes the BEST Biscuits and Gravy!  One of our favorite breakfast recipes of all time!&#10078;</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription;