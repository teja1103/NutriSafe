// import { Widget,addResponseMessage } from "react-chat-widget";
import { useEffect } from "react";


export default function Home() {
  
  // useEffect(() => {
  //   addResponseMessage('Welcome to the chatbox!');
  // }, []);


  return (
    <>
      <span className="font-bold text-4xl">Home</span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>

    </>
  );
}