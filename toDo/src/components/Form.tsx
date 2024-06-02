import { Button } from "react-bootstrap";
import { DataContext } from "../App";
import { useContext } from "react";

export default function Form() {
  const data = useContext(DataContext);
  const tasks = data?.tasks;
  const setTask = data?.setData;

  function updData(t: string) {
    return tasks?.push({ task: `{t}`, done: false });
  }

  return (
    <>
      <h2>New Task:</h2>
      <div className="d-flex flex-column">
        <input
          placeholder="Type a task here..."
          style={{ width: "350px" }}
        ></input>
        <Button
          variant="outline-primary"
          className="m-3"
          type="submit"
          style={{ width: "120px" }}
          onClick={setTask(tasks)}
        >
          Add
        </Button>
      </div>
    </>
  );
}
