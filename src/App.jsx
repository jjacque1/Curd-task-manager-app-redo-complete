import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title, description, status) {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      status: status,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function updateTaskStatus(id, newStatus) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  function updateTask(id, newTitle, newDescription) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task,
      ),
    );
  }

  return (
    <>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateTaskStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </>
  );
}
