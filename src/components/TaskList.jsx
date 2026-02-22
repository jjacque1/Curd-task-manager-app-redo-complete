import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onUpdateTaskStatus,
  onDeleteTask,
  onUpdateTask,
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onDeleteTask={onDeleteTask}
          task={task}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  );
}
