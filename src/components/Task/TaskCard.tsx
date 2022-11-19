import { Trash, Check } from "phosphor-react";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
// import { Checkbox } from "../Checkbox";
import { Text } from "../Text";

export interface Task {
  id: string;
  description: string;
  isDone?: boolean;
}

interface TaskCardProps extends Task {
  onCheckedChange: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskCard({
  id,
  description,
  isDone,
  onCheckedChange,
  onDeleteTask,
}: TaskCardProps) {
  const checkboxClass = !isDone
    ? "bg-transparent border-blue-500 hover:border-blue-700 hover:bg-blue-700 hover:bg-opacity-20"
    : "border-purple-700 bg-purple-700 hover:boder-purple-500 hover:bg-purple-500";

  return (
    <div className="flex w-full gap-4 p-4 bg-gray-500 border-[1px] border-gray-400 rounded-md items-start">
      <Checkbox
        onCheckedChange={() => {
          onCheckedChange(id);
        }}
        checked={isDone}
      />
      <Text
        className={`flex-1 text-start transition-color duration-500 ${
          isDone && "line-through text-gray-300"
        }`}
      >
        {description}
      </Text>
      <button
        title="Remover tarefa"
        className="bg-transparent rounded p-1 transition-colors duration-500 hover:bg-gray-400 text-gray-300 hover:text-danger"
        type="button"
        onClick={() => onDeleteTask(id)}
      >
        <Trash className=" w-4 h-4" />
      </button>
    </div>
  );
}
