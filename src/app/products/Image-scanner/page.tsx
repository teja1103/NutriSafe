"use client"
import { useEffect } from 'react';
//import ImageScanner from '../../../components/component/ImageScanner';
import Scanner from '../../../components/component/ImageScanner';
const GraphicDesignPage = () => {
  // Use useEffect to run code only on the client side
  useEffect(() => {
    // Your code here
  }, []);

  return (
    <>
      <span className="font-bold text-4xl">Image scanner</span>

      {/* Render the ImageScanner component */}
      <Scanner />

      {/* You can add other elements or components here */}
    </>
  );
};

export default GraphicDesignPage;