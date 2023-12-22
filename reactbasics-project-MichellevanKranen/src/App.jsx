// App.jsx
import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToRecipes} />
      ) : (
        <RecipeListPage onSelectRecipe={handleRecipeSelect} />
      )}
    </>
  );
};
