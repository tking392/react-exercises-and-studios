import styles from './Ingredients.module.css';




function RecipeIngredients () {
    let ingredients = ['Flakey Buttermilk Biscuits', 'Pork Sausage', 'All-Purpose Flour', 'Half & Half', 'Butter', 'Dried Thyme', 'Dried Crushed Rosemary', 'Crushed Red Pepper Flakes', 'Ground Black Pepper' ];
    return <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
        </ul>
    </div> 
}

export default RecipeIngredients;