import * as React from "react";
import Typography from "@mui/material/Typography";
import TaskCard from "./TaskCard";

export function TodayTasks({task}) {
  return <Typography paragraph>
    {task.map((task, index) => {
      if (task.date == getCurrentDate()) {
        return <TaskCard task={task} key={index} index={index} />;
      }
    })}
  </Typography>;
}

export function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  
    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date < 10 ? `0${date}` : `${date}`}`;
  }