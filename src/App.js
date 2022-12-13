import { useState } from 'react';
import './App.css';
import Todos from './Todos';
import NewTodo from './NewTodo';

function App() {
  const [todos, setTodos] = useState([
    { name:"Read a book", done: true},
    { name:"Read two book", done: true},
    { name:"Read 3 book", done: false},
    { name:"Read 4 book", done: true},
  ]);

  const handleNewTodo = (todo) => {
    if (!todo) {
      return;
    }
    const newTodos = todos.concat([{ name: todo, done:false}]);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i !== index ) {
        return todo;
      }
      return {name: todo.name, done: !todo.done};
    });
    setTodos(newTodos);
  };

  const totalRemaining = todos.filter((todo) => {
    return todo.done === false;
  }).length;

  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <div>totalRemaining: {totalRemaining}</div>
      <NewTodo onNewTodo = {(todo) => handleNewTodo(todo)} />
      <Todos todos={todos} onToggleDone={(i) => toggleDone(i)} />
    </div>
  );
}

export default App;
