import { FormEvent, useState } from "react";
import "./styles.css";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newItem) return;
    setTodos((currentTodos) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      };
      return [...currentTodos, newTodo];
    });
    setNewItem("");
  }

  console.log("todos: ", todos);

  function toggleTodo(todoID: string) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(todoID: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoID);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item" className="">
            New Item
          </label>
          <input
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
            value={newItem}
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        {!todos.length && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
