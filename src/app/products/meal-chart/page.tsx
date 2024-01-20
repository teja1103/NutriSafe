"use client"
import React, { useState, useEffect } from 'react';
import { Card } from '@tremor/react';
import axios from 'axios';

interface Meal {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  detailedRecipe?: string;
}

const MealChart: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>(getInitialMeals());

  function getInitialMeals(): Meal[] {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return daysOfWeek.map(day => ({
      day,
      breakfast: '',
      lunch: '',
      dinner: '',
      detailedRecipe: ''
    }));
  }

  const handleMealChange = (index: number, mealType: keyof Meal, value: string) => {
    setMeals(prevMeals => {
      const updatedMeals = [...prevMeals];
      updatedMeals[index][mealType] = value;
      return updatedMeals;
    });
  };

  const handleRecipeClick = async (index: number) => {
    const apiKey = process.env.NEXT_PUBLIC_REACT_APP_SPOONACULAR_API_KEY;

    try {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/search',
        {
          params: {
            query: meals[index].dinner,
            apiKey,
          },
        }
      );

      if (response.data.results.length > 0) {
        const detailedRecipe = response.data.results[0].instructions;
        setMeals(prevMeals => {
          const updatedMeals = [...prevMeals];
          updatedMeals[index].detailedRecipe = detailedRecipe;
          return updatedMeals;
        });
      }
    } catch (error) {
      console.error('Error fetching detailed recipe:', error);
    }
  };
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow:
      '-4.2px -4.2px 8.6px rgba(0, 0, 0, 0.066)'+
      '16px 16px 28.8px rgba(0, 0, 0, 0.094)'+
      '110px 110px 129px rgba(0, 0, 0, 0.16)',
    width: '50%',
  };
  return (
    <div style={{ display:'inline-grid', flexDirection:'column'}}>
      {meals.map((meal, index) => (
        // <Card className='card' key={index} style={{ padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card className='card' key={index} style={cardStyle}>
          <h2>{meal.day}</h2>
          <label>
            Breakfast:
            <input
              type="text"
              value={meal.breakfast}
              onChange={(e) => handleMealChange(index, 'breakfast', e.target.value)}
            />
          </label>
          <label>
            Lunch:
            <input
              type="text"
              value={meal.lunch}
              onChange={(e) => handleMealChange(index, 'lunch', e.target.value)}
            />
          </label>
          <label>
            Dinner:
            <input
              type="text"
              value={meal.dinner}
              onChange={(e) => handleMealChange(index, 'dinner', e.target.value)}
            />
            <button onClick={() => handleRecipeClick(index)}>Get Recipe</button>
          </label>
          {meal.detailedRecipe && (
            <div>
              <h3>Recipe Details</h3>
              <p>{meal.detailedRecipe}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default MealChart;











