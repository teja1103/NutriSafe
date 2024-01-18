import React from 'react';
import { Card } from '@tremor/react';
//import './page.css'

const Home: React.FC = () => {
  const meals = [
    {
      day: 'Monday',
      breakfast: 'Scrambled Eggs',
      lunch: 'Grilled Chicken Salad',
      dinner: 'Vegetarian Pasta',
    },
    {
      day: 'Tuesday',
      breakfast: 'Oatmeal with Fruits',
      lunch: 'Quinoa Bowl',
      dinner: 'Salmon with Roasted Vegetables',
    },
        {
      day: 'Wednesday',
      breakfast: 'Idly ',
      lunch: 'Caesar salad',
      dinner: 'Vegetarian rice bowl',
    },
    {
      day: 'Thursday',
      breakfast: 'Avacado toast',
      lunch: 'Grilled fish',
      dinner: 'Spagetti with meat balls',
    },
    {
      day: 'Friday',
      breakfast: 'Muesli with almond milk',
      lunch: 'Brown rice with lentil soup',
      dinner: 'Sushi',
    },
    {
      day: 'Saturday',
      breakfast: 'Bread and beans',
      lunch: 'Stir fried vegetables with paneer',
      dinner: 'Lasagne',
    },

    // Add more days and meals as needed
  ];

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
    <div style={{display:'inline-grid', flexDirection:'column'}}>
      {meals.map((meal, index) => (
        <Card className='card' key={index} style={cardStyle}>
          <h2>{meal.day}</h2>
          <p>Breakfast: {meal.breakfast}</p>
          <p>Lunch: {meal.lunch}</p>
          <p>Dinner: {meal.dinner}</p>
        </Card>
      ))}
    </div>
  );
};

export default Home;
