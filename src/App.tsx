import Form from "./components/Form";
import List from "./components/List";
import { Container } from "react-bootstrap";
import tasksData from "./data/data.json";
import React, { useEffect, useState } from "react";

interface TaskType {
  task: string;
  done: boolean;
}

interface DataContextType {
  tasks: TaskType[];
  setData: (t: TaskType[]) => void | undefined;
}

export const DataContext = React.createContext<DataContextType | undefined>(
  undefined
);

function App() {
  const storedTasks = localStorage.getItem("myTasks");
  const [tasks, setTasks] = useState<TaskType[]>(
    storedTasks ? JSON.parse(storedTasks) : tasksData
  );

  const setData = (t: TaskType[]) => setTasks(t);

  useEffect(() => {
    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("myTasks", jsonTasks);
  }, [tasks]);

  return (
    <DataContext.Provider value={{ tasks, setData }}>
      <Container className="d-flex flex-column mt-5 justify-content-center align-items-center">
        <Form />
        <List />
      </Container>
    </DataContext.Provider>
  );
}

export default App;
