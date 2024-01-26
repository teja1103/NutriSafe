"use client"
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
    {
      day: 'Sunday',
      breakfast: 'Idly ',
      lunch: 'Caesar salad',
      dinner: 'Vegetarian rice bowl',
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
    background: '#CFEDEE',
  };
  const cardStyle1 = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow:
      '-4.2px -4.2px 8.6px rgba(0, 0, 0, 0.066)'+
      '16px 16px 28.8px rgba(0, 0, 0, 0.094)'+
      '110px 110px 129px rgba(0, 0, 0, 0.16)',
    background: '#CFEDEE',
    width:'20%',
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className="flex-2 flex flex-row md:flex-row flex-wrap md:space-x-4 space-x-4">
  <Card className='card hover:shadow-lg' style={cardStyle1}>
    <h2>Calories consumed</h2>
    <p>550 calories</p>
  </Card>
  <Card className='card hover:shadow-lg' style={cardStyle1}>
    <h2>Average calories consumed</h2>
    <p>550 calories</p>
  </Card>
  <Card className='card hover:shadow-lg' style={cardStyle1}>
    <h2>Protein intake</h2>
    <p>50g</p>
  </Card>
  <Card className='card hover:shadow-lg' style={cardStyle1}>
    <h2>Average protein intake</h2>
    <p>30g</p>
  </Card>
</div>


        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
      {meals.map((meal, index) => (
        
        <Card className='card hover:shadow-lg' key={index} style={cardStyle}>
          <h2>{meal.day}</h2>
          <p>Breakfast: {meal.breakfast}</p>
          <p>Lunch: {meal.lunch}</p>
          <p>Dinner: {meal.dinner}</p>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Home;
