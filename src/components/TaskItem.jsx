import { useState } from "react";

export default function TaskItem({
  task,
  onUpdateTaskStatus,
  onDeleteTask,
  onUpdateTask,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(task.title);
  const [updateDescription, setUpdateDescription] = useState(task.description);

  function handleSave() {
    const trimmedUpdateTitle = updateTitle.trim();
    const trimmedUpdateDescription = updateDescription.trim();

    if (!trimmedUpdateTitle || !trimmedUpdateDescription) return;

    onUpdateTask(task.id, trimmedUpdateTitle, trimmedUpdateDescription);

    setIsUpdating(false);
  }

  function handleCancle() {
    setUpdateTitle(task.title);
    setUpdateDescription(task.description);
    setIsUpdating(false);
  }

  return (
    <li>
      {isUpdating ? (
        <>
          <input
            type="text"
            value={updateTitle}
            onChange={(event) => setUpdateTitle(event.target.value)}
          />
          <input
            type="text"
            value={updateDescription}
            onChange={(event) => setUpdateDescription(event.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancle}>Cancel</button>
        </>
      ) : (
        <>
          {task.title}
          <br />
          {task.description}
          <br />
          {task.status}
          <br />
          <label>
            {" "}
            Status:
            <select
              value={task.status}
              onChange={(event) =>
                onUpdateTaskStatus(task.id, event.target.value)
              }
            >
              <option value="pending">pending</option>
              <option value="in-progress">in-progress</option>
              <option value="done">done</option>
            </select>
          </label>
          <button onClick={() => setIsUpdating(true)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
