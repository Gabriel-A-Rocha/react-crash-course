import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      return [...currentTodos, newTodo];
    });
  }

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

  console.log("todos: ", todos);

  return (
    <>
      <NewTodoForm addTodo={addTodo}></NewTodoForm>
      <h1 className="header">Todo List</h1>
      <TodoList deleteTodo={deleteTodo} todos={todos} toggleTodo={toggleTodo}></TodoList>
    </>
  );
}
