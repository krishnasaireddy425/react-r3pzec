import React from "react";
import "./style.css";
import Todo from "./components/Todo.js"


function App() {
  return (
    <div>
      <h1>My TODOS</h1>
      <Todo text='A'/>
      <Todo text='B'/>
      <Todo text='C'/>
      
    </div>
  );
}

export default App;
