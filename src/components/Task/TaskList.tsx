import { Task, TaskCard } from "./TaskCard";

export interface TaskListProps {
  tasks: Task[];
  onChangeTasks: (tasks: Task[]) => void;
}

export function TaskList(props: TaskListProps) {
  function handleCheckedChange(id: string) {
    const tasks = [...props.tasks];

    const index = tasks.findIndex((task) => task.id === id);

    if (index >= 0) {
      tasks[index].isDone = !tasks[index].isDone;

      props.onChangeTasks([...tasks]);
    }
  }

  function handleDeleteTask(id: string) {
    const tasks = props.tasks.filter((task) => task.id !== id);

    console.log(tasks);

    props.onChangeTasks([...tasks]);
  }

  return (
    <div
      className={`flex-1 flex flex-col max-w-2xl lg:max-w-4xl w-full gap-3 mt-4 mb-4 px-1 overflow-y-auto ${
        props.tasks.length == 0 &&
        " border-t-gray-400 border-t-[1px] rounded-lg"
      }`}
    >
      {props.tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          onCheckedChange={handleCheckedChange}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
