import { Button } from "react-bootstrap";
import { DataContext } from "../App";
import { FormEvent, useContext } from "react";
import FormB from "react-bootstrap/Form";

export default function Form() {
  const data = useContext(DataContext);
  const tasks = data?.tasks;
  const setTask = data?.setData;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData);
    const newTask = { task: formJson.task, done: false };

    let updatedTasks: any[];
    if (tasks) {
      updatedTasks = [...tasks, newTask];
    } else {
      updatedTasks = [newTask];
    }

    if (setTask) setTask(updatedTasks);

    console.log(newTask);
    console.log(tasks);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h2>New Task:</h2>
      <div className="d-flex flex-column align-items-center">
        <FormB.Control
          placeholder="Type a task here..."
          style={{ width: "350px" }}
          type="text"
          name="task"
        ></FormB.Control>

        <Button
          variant="outline-primary"
          className="m-3"
          type="submit"
          style={{ width: "120px" }}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
