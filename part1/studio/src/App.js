import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from '../../studio/src/components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
       <RecipeDescription /> 
       <div>
       <RecipePhoto />
       <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
