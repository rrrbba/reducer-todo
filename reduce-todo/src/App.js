import React, { useReducer } from 'react';
import Todo from './components/Todo';
import { TodoForm } from './components/TodoForm';
import './App.css';
import { reducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>HELLO</h1>
      <Todo state = {state} dispatch = {dispatch} />
      <TodoForm state = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
