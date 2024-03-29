
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  extendedIngredients?: any[];
}

const RecipesPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=79bf2aee1a11496db3e9786608a1153f&limitLicense=true`
      );

      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchRecipeDetails = async (recipeId: number) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=79bf2aee1a11496db3e9786608a1153f`
      );

      setSelectedRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-c-white">Recipe Maker</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-start">
        <label className=" mb-2">
          <div className='text-c-white'>
          Ingredients:</div>
          <br />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-2 rounded-md p-2 w-60"
          />
        </label>
        <button
          type="submit"
          className="border-2 rounded-md hover:shadow-sm hover:shadow-white text-c-white  p-2 w-40 hover:bg-e-d-brown"
        >  Search Recipes
        </button>
      </form>

      {selectedRecipe ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2 hover:shadow-sm hover:shadow-white rounded-md text-c-white ">{selectedRecipe.title}</h2>
          <p className='text-c-white text-md'>Ingredients:</p>
          {selectedRecipe.extendedIngredients ? (
            <div>
              {selectedRecipe.extendedIngredients.map((ingredient, index) => (
                <div
                className='hover:bg-e-d-brown text-c-white hover:shadow-sm hover:shadow-white rounded-md'
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    border:'px',
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
          <p className="mt-2 text-c-white">Instructions:</p>
          <p className='text-c-white' style={{ maxWidth: '100vw', overflowX: 'auto' }}>
            {selectedRecipe.instructions}
          </p>
          <button onClick={() => setSelectedRecipe(null)} className="border-2 border-white text-c-white rounded-md border-black p-2 mt-4 hover:shadow-sm hover:shadow-white">
            Go Back
          </button>
        </div>
      ) : (
        <div className="mt-4">
          {recipes.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-2 text-c-white">Recipes:</h2>
              <ul className="flex flex-wrap  justify-start ">
                {recipes.map((recipe) => (
                  <li key={recipe.id} className="mb-2 p-2">
                    <button
                      className="border-2 hover:shadow-sm hover:shadow-white rounded border-c-white p-2 text-c-white hover:bg-e-d-brown"
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