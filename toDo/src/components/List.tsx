import ListRow from "./ListRow";
import { useContext } from "react";
import { DataContext } from "../App";

export default function ListComp() {
  const data = useContext(DataContext);
  const tasks = data?.tasks;

  return (
    <>
      {tasks?.map((task, index) => (
        <ListRow {...task} key={index} />
      ))}
    </>
  );
}
