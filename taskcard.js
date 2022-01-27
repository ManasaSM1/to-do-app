import {
    Card,
    CardActions,
    CardContent,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import React from "react";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  function TaskCard({
    task,
    setTask,
    index,
    setTaskname,
    setDate,
    setGroup,
    setPriority,
    isEditTask,
    setIsEditTask,
    setEditIndex,
    handleDelete,
  }) {
    const handleEdit = (el) => {
      if (el) {
        setTaskname("");
        setDate("");
        setGroup("");
        setPriority("");
      } else {
        setTaskname(task.taskName);
        setDate(task.date);
        setGroup(task.taskGroup);
        setPriority(task.priority);
      }
    };
  
    return (
      <Card
        sx={{ minWidth: 275 }}
        className="card"
        style={
          task.priority === "high"
            ? {
                border: "1px solid crimson",
                color: "crimson",
                backgroundColor: "mistyrose",
              }
            : task.priority === "medium"
            ? {
                border: "1px solid green",
                color: "green",
                backgroundColor: "rgb(228, 250, 228)",
              }
            : {
                border: "1px solid blue",
                color: "blue",
                backgroundColor: "lightcyan",
              }
        }
      >
        <CardActions disableSpacing>
          <Checkbox color="success" />
        </CardActions>
        <CardContent>
          <Typography variant="h6" gutterBottom component="div">
            Task {index + 1}: {task.taskName}
            <div>Date: {task.date}</div>
            <div>Group: {task.taskGroup}</div>
          </Typography>
        </CardContent>
  
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <EditIcon
              onClick={() => {
                if (isEditTask) {
                  handleEdit(isEditTask);
                  setIsEditTask(false);
                  setEditIndex("");
                } else {
                  handleEdit(isEditTask);
                  setIsEditTask(true);
                  setEditIndex(index);
                }
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon onClick={() => handleDelete(index)} />
          </IconButton>
        </CardActions>
        <div></div>
      </Card>
    );
  }
  
  export default TaskCard;