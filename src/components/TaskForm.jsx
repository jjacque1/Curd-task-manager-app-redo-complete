import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  function handleSubmit(event) {
    event.preventDefault(); 

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) return;

    onAddTask(trimmedTitle, trimmedDescription, status);

    setTitle("");
    setDescription("");
    setStatus("pending");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          placeholder="Add Title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          placeholder="Add Description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
