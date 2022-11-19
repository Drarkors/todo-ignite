import { Text } from "../Text";
import { Task } from "./TaskCard";

interface TaskCounterProps {
  tasks: Task[];
}

export function TaskCounter({ tasks }: TaskCounterProps) {
  const taskCounter = tasks.reduce(
    (counter, task) => {
      if (task.isDone) counter.done++;

      counter.total++;

      return counter;
    },
    {
      total: 0,
      done: 0,
    }
  );

  return (
    <div className="flex max-w-2xl lg:max-w-4xl w-full mt-14 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Text className="font-bold text-blue-500" size="lg">
          Tarefas criadas
        </Text>
        <Text
          title="Tarefas criadas"
          className="text-gray-200 font-bold bg-gray-400 px-2 py-1 rounded-lg leading-none"
          size="sm"
        >
          {taskCounter.total}
        </Text>
      </div>

      <div className="flex gap-2 items-center">
        <Text className="font-bold text-purple-500" size="lg">
          Concluídas
        </Text>
        <Text
          title="Tarefas concluídas"
          className="text-gray-200 font-bold bg-gray-400 px-2 py-1 rounded-lg leading-none"
          size="sm"
        >
          {taskCounter.total === 0
            ? "0"
            : `${taskCounter.done} de ${taskCounter.total}`}
        </Text>
      </div>
    </div>
  );
}
