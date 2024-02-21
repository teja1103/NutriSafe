import React from 'react';
import { Card } from '@tremor/react';

interface CardData {
  title: string;
  value: string;
}

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

  const cardData: CardData[] = [
    { title: 'Calories consumed', value: '550 calories' },
    { title: 'Average calories consumed', value: '550 calories' },
    { title: 'Protein intake', value: '50g' },
    { title: 'Average protein intake', value: '30g' },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((data, index) => (
          <Card className='card bg-white rounded-xl hover:shadow-xl' key={index}>
            <h2>{data.title}</h2>
            <p>{data.value}</p>
          </Card>
        ))}
      </div>
          <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {meals.map((meal, index) => (
          <Card className='card bg-white rounded-xl hover:shadow-xl' key={index}>
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
