import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [num,setnum]=useState(0);
  const [nums,setnums]=useState(0);

  useEffect(()=>{
    alert("I AM CLICKED")

  },[num])
  return (
    <div className="App">
     <button onClick={()=>(setnum(num+1))}>click me{num}</button>
     <button onClick={()=>(setnums(nums+1))}>click me{nums}</button>
    </div>
  );
}

export default App;
