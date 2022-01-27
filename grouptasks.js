import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TaskCard from "./TaskCard";

export function GroupTasks({task}) {
  return <>
    <Typography variant="h5" gutterBottom component="div">
      General:
    </Typography>
    <Typography paragraph>
      {task.map((task, index) => {
        if (task.taskGroup == "general") {
          return <TaskCard task={task} key={index} index={index} />;
        }
      })}
    </Typography>
    <Divider />
    <Typography variant="h5" gutterBottom component="div">
      Shopping:
    </Typography>
    <Typography paragraph>
      {task.map((task, index) => {
        if (task.taskGroup == "shopping") {
          return <TaskCard task={task} key={index} index={index} />;
        }
      })}
    </Typography>
    <Divider />
    <Typography variant="h5" gutterBottom component="div">
      Health:
    </Typography>
    <Typography paragraph>
      {task.map((task, index) => {
        if (task.taskGroup == "health") {
          return <TaskCard task={task} key={index} index={index} />;
        }
      })}
    </Typography>
    <Divider />
    <Typography variant="h5" gutterBottom component="div">
      Finance:
    </Typography>
    <Typography paragraph>
      {task.map((task, index) => {
        if (task.taskGroup == "finance") {
          return <TaskCard task={task} key={index} index={index} />;
        }
      })}
    </Typography>
    <Divider />
    <Typography variant="h5" gutterBottom component="div">
      Groceries:
    </Typography>
    <Typography paragraph>
      {task.map((task, index) => {
        if (task.taskGroup == "groceries") {
          return <TaskCard task={task} key={index} index={index} />;
        }
      })}
    </Typography>
    <Divider />
  </>;
}