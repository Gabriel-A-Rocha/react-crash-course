import { Todo } from "./App";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  deleteTodo: (todoID: string) => void;
  toggleTodo: (todoID: string) => void;
  todos: Todo[];
}

export function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <ul className="list">
      {!todos.length && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          ></TodoItem>
        );
      })}
    </ul>
  );
}
