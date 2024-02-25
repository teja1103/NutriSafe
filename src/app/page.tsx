import React from 'react';
import { Card } from '@tremor/react';

interface CardData {
  title: string;
  value: string;
}

interface MealData {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  image: string;
}

const Home: React.FC = () => {
  const meals: MealData[] = [
    {
      day: 'Monday',
      breakfast: 'Oats Upma',
      lunch: 'Grilled Chicken Salad',
      dinner: 'Vegetarian Pasta',
      image: 'monday.jpg',
    },
    {
      day: 'Tuesday',
      breakfast: 'Idly',
      lunch: 'Quinoa Bowl',
      dinner: 'Salmon with Roasted Vegetables',
      image: 'tuesday.jpg',
    },
    {
      day: 'Wednesday',
      breakfast: 'Fruit bowl',
      lunch: 'Caesar salad',
      dinner: 'Vegetarian rice bowl',
      image: 'wednesday.jpg',
    },
    {
      day: 'Thursday',
      breakfast: 'Detox Smoothie',
      lunch: 'Grilled fish',
      dinner: 'Spaghetti with meatballs',
      image: 'thursday.jpg',
    },
    {
      day: 'Friday',
      breakfast: 'Vegan Buddha bowl',
      lunch: 'Brown Rice with Lentil Soup',
      dinner: 'Sushi',
      image: 'friday.jpg',
    },
    {
      day: 'Saturday',
      breakfast: 'Cus Cus Salad',
      lunch: 'Stir Fried Vegetables with Paneer',
      dinner: 'Lasagne',
      image: 'saturday.jpg',
    },
    {
      day: 'Sunday',
      breakfast: 'Quinoa Salad',
      lunch: 'Caesar Salad',
      dinner: 'Vegetarian Rice Bowl',
      image: 'sunday.jpg',
    },
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
          <Card
            className="bg-opacity-75 bg-white bg-blur border border-white border-opacity-10 rounded-lg hover:shadow-sm hover:shadow-white  text-c-white"
            key={index}
          >
            <h2>{data.title}</h2>
            <p>{data.value}</p>
          </Card>
        ))}
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {meals.map((meal, index) => (
          <div
            className="bg-opacity-75  bg-blur border border-white border-opacity-10 rounded-lg hover:shadow-sm hover:shadow-white flex justify-evenly text-c-white"
            key={index}
          >
            
            <div className="p-4">
              <h2>{meal.day}</h2>
              <p>Breakfast: {meal.breakfast}</p>
              <p>Lunch: {meal.lunch}</p>
              <p>Dinner: {meal.dinner}</p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="rounded-full overflow-hidden h-32 w-32">
                <img
                  src={meal.image}
                  alt={meal.day}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
