import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render () {
        return(
        <div>
            <div>
                <h1> Beef Bourguignon</h1>
                <p>A beef burgundy stew with braised beef, caramelized onions, and sauteed mushrooms in a red wine sauce.</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}
function RecipeAuthor() {
    const authorLink = "https://www.foodnetwork.com/profiles/talent/ina-garten";
    const authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/secured/fullset/2017/5/17/0/BX1303H_Ina-Garten-horiz_s4x3.jpg.rend.hgtvcom.616.462.suffix/1495122803772.jpeg";
    const authorName = "Ina Garten";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt= "Photo of Ina Garten" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Ina's Food Network Profile</a>
            </div>
        </div>
    )

}
export default RecipeDescription;