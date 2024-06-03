import ListRow from "./ListRow";
import { useContext } from "react";
import { DataContext } from "../App";

export default function ListComp() {
  const data = useContext(DataContext);
  const tasks = data?.tasks;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {tasks?.map((task, index) => (
        <ListRow {...task} key={index}></ListRow>
      ))}
    </div>
  );
}
