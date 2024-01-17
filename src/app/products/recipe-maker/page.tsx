"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

const RecipesPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(`
        https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=79bf2aee1a11496db3e9786608a1153f&limitLicense=true`
      );

      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchRecipeDetails = async (recipeId: number) => {
    try {
      const response = await axios.get(`
        https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=79bf2aee1a11496db3e9786608a1153f`
      );

      setSelectedRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes Page</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-start">
        <label className="mb-2">
          Ingredients:
          <br />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-2 rounded-md p-2 w-60"
          />
        </label>
        <button type="submit" className="border-2 rounded-md border-black p-2 w-40">
          Search Recipes
        </button>
      </form>

      {selectedRecipe ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">{selectedRecipe.title}</h2>
          <p>Ingredients:</p>
          {selectedRecipe.extendedIngredients ? (
            <div>
              {selectedRecipe.extendedIngredients.map((ingredient, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    backgroundColor: '#e0e0e0',
                    padding: '5px',
                    margin: '5px',
                    maxWidth: '100vw', // Restrict to viewport width
                    overflowX: 'auto', // Enable horizontal scroll if needed
                  }}
                >
                  {ingredient.original}
                </div>
              ))}
            </div>
          ) : (
            <p>No ingredients available.</p>
          )}
          <p className="mt-2">Instructions:</p>
          <p style={{ maxWidth: '100vw', overflowX: 'auto' }}>
            {selectedRecipe.instructions}
          </p>
          <button onClick={() => setSelectedRecipe(null)} className="border-2 rounded-md border-black p-2 mt-4">
            Go Back
          </button>
        </div>
      ) : (
        <div className="mt-4">
          {recipes.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Recipes:</h2>
              <ul className="flex flex-wrap">
                {recipes.map((recipe) => (
                  <li key={recipe.id} className="mb-2">
                    <button
                      className="border-2 rounded-md border-black p-2"
                      onClick={() => fetchRecipeDetails(recipe.id)}
                    >
                      {recipe.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;