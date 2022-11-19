import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

import "./styles/global.css";
import { TaskCounter } from "./components/Task/TaskCounter";
import { TaskList } from "./components/Task/TaskList";
import { Task } from "./components/Task/TaskCard";

export function App() {
  const [newTask, setNewTask] = useState("");
  const [newTaskError, setNewTaskError] = useState("");

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: crypto.randomUUID(),
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
  ]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const task: Task = {
      id: crypto.randomUUID(),
      description: newTask,
      isDone: false,
    };

    setTasks([task, ...tasks]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    // setNewTaskError("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
    // setNewTaskError("Esse campo é obrigatório!");
  }

  function handleOnChangeTaskIsDone(changedTasks: Task[]) {
    setTasks([...changedTasks]);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-600 items-center">
      <Header />

      {/* <div className="h-[100%-24rem] flex flex-col gap-4 max-w-xl lg:max-w-2xl w-full self-center"> */}
      <form
        id="task-form"
        className="flex gap-2 max-w-2xl lg:max-w-4xl w-full self-center items-center justify-center"
        style={{ marginTop: "-1.75rem" }}
        onSubmit={handleAddNewTask}
      >
        <TextInput.Root>
          <TextInput.Input
            name="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
            autoComplete="off"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
        </TextInput.Root>
        <Button form="task-form" type="submit">
          <Text size="md">Criar</Text>
          <PlusCircle className="w-4 lg:w-5 h-4 lg:h-5" />
        </Button>
      </form>

      <TaskCounter tasks={tasks} />

      {/* <div className="h-[calc(100%-20rem)] flex mb-4 overflow-y-hidden"> */}
      <TaskList tasks={tasks} onChangeTasks={handleOnChangeTaskIsDone} />
      {/* </div> */}
      {/* </div> */}

      {/* {
        tasks.length === 0 && (

        )
      } */}
    </div>
  );
}
