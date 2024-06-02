import Form from "./components/Form";
import List from "./components/List";
import { Container } from "react-bootstrap";
import tasksData from "./data/data.json";
import React, { useState } from "react";

interface TaskType {
  task: string;
  done: boolean;
}

interface DataContextType {
  tasks: TaskType[];
  setData: (t: TaskType[]) => void;
}

export const DataContext = React.createContext<DataContextType | undefined>(
  undefined
);

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const setData = (t: TaskType[]) => setTasks(t);

  return (
    <DataContext.Provider value={{ tasks, setData }}>
      <Container className="d-flex flex-column mt-5 ">
        <Form />
        <List />
      </Container>
    </DataContext.Provider>
  );
}

export default App;
