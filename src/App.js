import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import EntryForm from './components/EntryForm';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <EntryForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />    
    </div>
  );
}

export default App;
