import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center gap-3 '>
        <button onClick={()=>{
          setColor("blue")
        }} className=' bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>blue</button>
        <button 
        onClick={()=>{
          setColor("green")
        }}className=' bg-green-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>green</button>
        <button onClick={()=>{
          setColor("red")
        }}className=' bg-red-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>red</button>
        <button onClick={()=>{
          setColor("yellow")
        }}className=' bg-yellow-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>yellow</button>
        <button 
        onClick={()=>{
          setColor("purple")
        }}className=' bg-purple-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>purple</button>
        <button 
        onClick={()=>{
          setColor("black")
        }}className=' bg-black hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>black</button>
        <button 
        onClick={()=>{
          setColor("pink")
        }}className=' bg-pink-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded w-auto h-auto'>pink</button>
        </div>
       
      </div>
      
    </>
  )
}

export default App



// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [color, setColor] = useState("blue");
//   return (
//     <>
//       <div
//         className='w-full h-screen duration-200'
//         style={{ backgroundColor: `${color}` }}
//       ></div>
//     </>
//   );
// }

// export default App;