import { Todo } from "./App";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todoID: string) => void;
  toggleTodo: (todoID: string) => void;
}

export function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
