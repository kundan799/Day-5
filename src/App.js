
import React,{useEffect, useState} from 'react';
import './App.css';


function App() {
  const [count1,setcount1]=useState(0)
  const [count2,setcount2]=useState(0)
  useEffect(()=>{
    console.log("I AM CLICKED")
    alert("i am kundan")

  },[])
  return (
    <>
    <div className="App" onClick={()=>(setcount1(count1+1))}>
      counter 1:{count1}
    </div>
    <div className="App" onClick={()=>(setcount2(count2+1))}>
      counter 2:{count2}
    </div>
    
   
     </>
  );
}

export default App;
