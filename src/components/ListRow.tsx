import { useState } from "react";
import { Stack } from "react-bootstrap";

interface ListRowProps {
  task: string;
  done: boolean;
}

export default function ListRow({ task, done }: ListRowProps) {
  const [markDone, setMarkDone] = useState(done);

  return (
    <Stack direction="horizontal" gap={3} className="d-flex ">
      <div
        style={{
          background: markDone ? "red" : "green",
          width: "1rem",
          height: "1rem",
          cursor: "pointer",
        }}
        className="border border-success rounded-circle"
        onClick={() => setMarkDone(!markDone)}
      ></div>
      <span style={{ textDecoration: markDone ? "line-through" : "none" }}>
        {task}
      </span>
    </Stack>
  );
}
