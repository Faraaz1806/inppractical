import { useState } from 'react'
import './App.css'
import Abc from './components/Abc';

function App() {
    let [a,Seta] = useState();
    let [b,Setb]  = useState();
    let [Result, SetResult]= useState("Result will be Displayed here");

// functions for operations

        function add(){
          SetResult(Number(a) + Number(b))
        }
        function substract(){
          SetResult(Number(a)-Number(b))
        }
        function multiply(){
          SetResult(Number(a)*Number(b))
        }
        function divide(){
          if (b!=0){
            SetResult(Number(a)/Number(b))
          }
          else{
            alert("Denominator cannot be zero")
          }

        }


  return (
    <>
      <div className="bg-blue-950 flex flex-col justify-center items-center w-full h-screen">
        <h1 className='text-white font-bold text-4xl'>Basic Calculator in React</h1>
        <br></br>
        
        <div className="bg-blue-50 w-110 h-100 rounded-4xl flex justify-center flex-col">
          <h2 className='text-gray-800 font-medium text-xl m-5 flex justify-center'>Enter the Values of a and b</h2>
            <div className="flex flex-row justify-center">

            <input 
            type = 'text' 
            value = {a}
            onChange={(e)=>Seta(e.target.value)}
            placeholder='Enter "a"' 
            id='a'
            className='w-25 h-10 border rounded-xl m-5 p-4  text-gray-800' ></input>

            <input type = 'text'
            placeholder='Enter "b"'
            value = {b}
            onChange={(e)=>Setb(e.target.value)}
            className='w-25 h-10 border m-5 p-4 rounded-xl text-gray-800' ></input>

            </div>
             <h2 className='text-gray-800 font-medium text-xl m-5 flex justify-center'>What Operation you want to Perform?</h2>
             <div className="buttons flex justify-between ml-7 mr-7 ">
              <button onClick={add} className='border w-20 h-9 items-center pb-1 rounded-xl hover:w-21 hover:h-10 hover:shadow-2xl hover:cursor-pointer hover:drop-shadow-xl transition-all'>a+b</button>
              <button onClick={substract} className='border w-20 h-9 items-center pb-1 rounded-xl hover:w-21 hover:h-10 hover:shadow-2xl hover:cursor-pointer hover:drop-shadow-xl transition-all'>a-b</button>
              <button onClick={multiply} className='border w-20 h-9 items-center pb-1 rounded-xl hover:w-21 hover:h-10 hover:shadow-2xl hover:cursor-pointer hover:drop-shadow-xl transition-all'>a*b</button>
              <button onClick={divide} className='border w-20 h-9 items-center pb-1 rounded-xl hover:w-21 hover:h-10 hover:shadow-2xl hover:cursor-pointer transition-all' >a/b</button>
             </div>
             <h1 className='text-2xl font-bold flex justify-center mt-5 text-green-800'>{Result}</h1>
        </div>
      </div>

        <Abc/>
      
    </>
  )
}

export default App
