import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
let A=()=>{
  const[count,setcount]=useState(0);
  return (
<div onClick={()=>setcount(count+1)}>component A :{count}</div>
  )
}
let B=()=><div>component B</div>
function App() {
const [showcomponent, setshowcomponent]=useState(false);




  useEffect(()=>{
    console.log("I AM CLICKED")

  })
 
  return (
    <>
    <div className="App" onClick={()=>setshowcomponent(!showcomponent)}>
      hellow
     
    
    </div>
     {showcomponent ? <A/>:<B/>}
     </>
  );
}

export default App;
