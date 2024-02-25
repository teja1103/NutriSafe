"use client"
import { useEffect } from 'react';
import Scanner from '@/components/component/Scanner';

const ImageScanner = () => {
  useEffect(() => {
    // Your code here
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-4xl text-center my-4 text-c-white">Scanner</h1>
      <Scanner />
    </div>
  );
};

export default ImageScanner;
