"use client"
import React, { useState, useEffect } from 'react';
import { Card, Title } from '@tremor/react';
import axios from 'axios';

interface Meal {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  calories?: number;
}

const MealChart: React.FC = () => {
  const [inputMeal, setInputMeal] = useState<Meal>({ day: 'Monday', breakfast: '', lunch: '', dinner: '' });
  const [meals, setMeals] = useState<Meal[]>(getStoredMeals());

  useEffect(() => {
    saveMealsToStorage(meals);
  }, [meals]);

  function getStoredMeals(): Meal[] {
    if (typeof window !== 'undefined') {
      const storedMeals = localStorage.getItem('meals');
      return storedMeals ? JSON.parse(storedMeals) : getInitialMeals();
    }
    return getInitialMeals();
  }

  function saveMealsToStorage(updatedMeals: Meal[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('meals', JSON.stringify(updatedMeals));
    }
  }

  function getInitialMeals(): Meal[] {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return daysOfWeek.map(day => ({
      day,
      breakfast: '',
      lunch: '',
      dinner: '',
      calories: 0,
    }));
  }

  const handleInputMealChange = (mealType: keyof Meal, value: string) => {
    setInputMeal(prevInputMeal => ({
      ...prevInputMeal,
      [mealType]: value,
    }));
  };

  const handleAddMeal = () => {
    setMeals(prevMeals =>
      prevMeals.map(prevMeal =>
        prevMeal.day === inputMeal.day ? { ...prevMeal, ...inputMeal } : prevMeal
      )
    );
    setInputMeal({ day: 'Monday', breakfast: '', lunch: '', dinner: '' });
  };

  const handleResetMeals = () => {
    setMeals(getInitialMeals());
  };

  const calculateCalories = async (meal: Meal) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_REACT_APP_SPOONACULAR_API_KEY;
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/search`,
        {
          params: {
            query: meal.dinner,
            apiKey,
          },
        }
      );

      if (response.data.results.length > 0) {
        const recipeId = response.data.results[0].id;
        const caloriesResponse = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json`,
          {
            params: {
              apiKey,
            },
          }
        );
        const calories = caloriesResponse.data.calories.value;
        setMeals(prevMeals =>
          prevMeals.map(prevMeal =>
            prevMeal.day === meal.day ? { ...meal, calories } : prevMeal
          )
        );
      }
    } catch (error) {
      console.error('Error calculating calories:', error);
    }
  };

  const inputStyle = {
    border: '1px solid rgba(0, 0, 0, 0.42)',
    borderRadius: '5px',
    padding: '12px',
    width: '100%',
    color: '#0b1623',
    fontSize: '14px',
    fontWeight: 500,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="text-2xl text-center font-bold mb-4">Meal Planner</h1>
      <Card className='bg-g-blue hover:shadow-lg' style={{ width: 350, borderRadius: 10, marginBottom: 16 }}>
        <h2>Enter Your Meal</h2>
        <label>
          Day:
          <select
          className='bg-i-blue'
            value={inputMeal.day}
            onChange={(e) => handleInputMealChange('day', e.target.value)}
            style={inputStyle}
          >
            {meals.map((meal, index) => (
              <option key={index} value={meal.day}>
                {meal.day}
              </option>
            ))}
          </select>
        </label><br />
        <label>
          Breakfast:
          <input
                    className='bg-i-blue'
            type="text"
            value={inputMeal.breakfast}
            onChange={(e) => handleInputMealChange('breakfast', e.target.value)}
            style={inputStyle}
          />
        </label><br />
        <label>
          Lunch:
          <input
                    className='bg-i-blue'
            type="text"
            value={inputMeal.lunch}
            onChange={(e) => handleInputMealChange('lunch', e.target.value)}
            style={inputStyle}
          />
        </label><br />
        <label>
          Dinner:
          <input
                    className='bg-i-blue'
            type="text"
            value={inputMeal.dinner}
            onChange={(e) => handleInputMealChange('dinner', e.target.value)}
            style={inputStyle}
          />
        </label><br /><br />
        <button className="hover:bg-h-blue hover:shadow border-2 border-solid hover:border-h-blue rounded-lg" onClick={handleAddMeal}>
  Save Meal
</button>

      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', flexFlow:'wrap' }}>
    
      {meals.map((meal, index) => (
        
        <Card key={index} className='bg-g-blue hover:shadow-lg space-x-1 space-y-1 justify-betweeen' style={{ width: 400, borderRadius: 10, marginBottom: 16 }}>
          <h2>{meal.day}</h2>
          <p>Breakfast: {meal.breakfast}</p>
          <p>Lunch: {meal.lunch}</p>
          <p>Dinner: {meal.dinner}</p>
        </Card>
      ))}
</div>
      <Card style={{ borderRadius: 10, marginBottom: 16,   }}>
        <button className='bg-g-blue w-40 h-10 hover:bg-h-blue hover:shadow-lg border-2 border-solid border-h-blue rounded-lg' onClick={handleResetMeals} >Reset Meals</button>
      </Card>
    </div>
  );
};

export default MealChart;
