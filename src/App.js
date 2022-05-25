
import React from 'react';
import './App.css';
import Todo from './component/Todo';


function App() {
  // fetch('http://localhost:8080/todos')
  // .then(response => response.json())
  // .then(data => console.log(data));
  
  
  return (
    <>
    <div className="App" >
    <Todo/>
    </div> 
     </>
  );
}

export default App;
