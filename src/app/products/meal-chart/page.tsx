"use client"
import React, { useState, useEffect } from 'react';
import { Card, DonutChart, Title } from '@tremor/react';
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

  const calories = [
    { name: "Monday", calories: 9800 },
    { name: "Tuesday", calories: 4567 },
    { name: "Wednesday", calories: 3908 },
    { name: "Thursday", calories: 2400 },
    { name: "Friday", calories: 1908 },
    { name: "Saturday", calories: 1398 },
    { name: "Sunday", calories: 1398 },
  ];

  const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card style={{ width: 400, background: 'white', borderRadius: 10, marginBottom: 16 }}>
        <h2>Enter Your Meal</h2>
        <label>
          Day:
          <select
            value={inputMeal.day}
            onChange={(e) => handleInputMealChange('day', e.target.value)}
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
            type="text"
            value={inputMeal.breakfast}
            onChange={(e) => handleInputMealChange('breakfast', e.target.value)}
          />
        </label><br />
        <label>
          Lunch:
          <input
            type="text"
            value={inputMeal.lunch}
            onChange={(e) => handleInputMealChange('lunch', e.target.value)}
          />
        </label><br />
        <label>
          Dinner:
          <input
            type="text"
            value={inputMeal.dinner}
            onChange={(e) => handleInputMealChange('dinner', e.target.value)}
          />
        </label><br />
        <button onClick={handleAddMeal}>Save Meal</button>
      </Card>

      {meals.map((meal, index) => (
        <Card key={index} style={{ width: 400, background: 'white', borderRadius: 10, marginBottom: 16 }}>
          <h2>{meal.day}</h2>
          <p>Breakfast: {meal.breakfast}</p>
          <p>Lunch: {meal.lunch}</p>
          <p>Dinner: {meal.dinner}</p>
          <p>Calories: {meal.calories}</p>
          <button onClick={() => calculateCalories(meal)}>Calculate Calories</button>
        </Card>
      ))}

      <Card style={{ width: 400, background: 'white', borderRadius: 10, marginBottom: 16 }}>
        <button onClick={handleResetMeals}>Reset Meals</button>
      </Card>

      <Card className="mx-auto max-w-xs">
        <Title>Calories</Title>
          <DonutChart
            className="mt-6"
            data={calories}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue-900", "blue-800", "blue-700", "blue-600", "blue-500", "blue-400"]}
          />
      </Card>
    </div>
  );
};

export default MealChart;
