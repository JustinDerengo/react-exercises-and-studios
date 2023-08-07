import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["2 1/2 lb chuck beef cubed", "1 lb carrots cut in slices", "2 yellow onions, sliced", "1 pound fresh mushrooms stems discarded, caps sliced thickly", "1 bottle of dry red wine", "1 tablespoon of tomato paste", "1/2 cup of cognac", "8 ounces of diced bacon", "2 cups of beef broth", "3 tablespoons all-purpose flour", "1 tablespoon of olive oil", "4 tablespoons of unsalted butter, room temperature"];

    return (
        <div>
            <h3>Ingredients Needed</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
                <li>{ingredients[7]}</li>
                <li>{ingredients[8]}</li>
                <li>{ingredients[9]}</li>
                <li>{ingredients[10]}</li>
                <li>{ingredients[11]}</li>
            </ul>
        </div>
    )
}