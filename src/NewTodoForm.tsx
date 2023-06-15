import { FormEvent, useState } from "react";

interface NewTodoFormProps {
  addTodo: (title: string) => void;
}

export function NewTodoForm({ addTodo }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newItem) return;
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="">
          New Item
        </label>
        <input type="text" onChange={(e) => setNewItem(e.target.value)} id="item" value={newItem} />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
