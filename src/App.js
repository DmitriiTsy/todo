
import React from "react";
import "./App.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo-tasks">
      <span className="todo-tasks__text" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div className="todo-tasks__buttons">
        <button type="submit" variant="todo-tasks__buttons--success" onClick={() => markTodo(index)}>✓</button>{' '}
        <button type="submit" variant="todo-tasks__buttons--danger" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="addtodos"> 
      <label className="form-label"><b>Add Todo</b></label>
      <input type="text" className="form-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      <button className="form-button" variant="primary mb-3" type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-header">My Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todos.map((todo, index) => (
            <div className="app-wraper">
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </div>
          ))}
        </div>
        <h3 className="app-header">You have {todos.length} {todos.length > 1 || todos.length === 0 ?'tasks': 'task'} today</h3>
      </div>
    </div>
  );
}

export default App;