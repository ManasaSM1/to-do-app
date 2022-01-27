import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TaskCard from "./TaskCard";

export function TaskList({
  setTaskname,
  taskname,
  setDate,
  date,
  group,
  setGroup,
  priority,
  setPriority,
  addTaskName,
  editTaskName,
  task,
  setTask,
  isEditTask,
  setIsEditTask,
  editIndex,
  setEditIndex,
  handleDelete,
}) {
  return (
    <>
      <Typography paragraph className="container-body">
        <div className="input-box">
          <TextField
            id="outlined-basic"
            label="Task Name"
            variant="outlined"
            onChange={(event) => setTaskname(event.target.value)}
            value={taskname}
            sx={{ width: 220 }}
          />
          <TextField
            id="date"
            label="Task Date"
            type="date"
            // defaultValue="2021-10-03"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
          <FormControl sx={{ width: 220 }}>
            <InputLabel id="demo-simple-select-label">Task Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={group}
              label="Task Group"
              onChange={(event) => setGroup(event.target.value)}
            >
              <MenuItem value="general">general</MenuItem>
              <MenuItem value="shopping">shopping</MenuItem>
              <MenuItem value="health">health</MenuItem>
              <MenuItem value="finance">finance</MenuItem>
              <MenuItem value="groceries">groceries</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 220 }}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              label="Priority"
              onChange={(event) => setPriority(event.target.value)}
              style={
                priority == "low"
                  ? { backgroundColor: "lightcyan" }
                  : priority == "medium"
                  ? { backgroundColor: "rgb(228, 250, 228)" }
                  : priority == "high"
                  ? { backgroundColor: "mistyrose" }
                  : {}
              }
            >
              <MenuItem value="low">low</MenuItem>
              <MenuItem value="medium">medium</MenuItem>
              <MenuItem value="high">high</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            className="add-task-btn"
            onClick={() => {
              if (isEditTask) {
                editTaskName(editIndex);
              } else {
                addTaskName();
              }
            }}
            sx={{ width: 220 }}
          >
            {isEditTask ? "Edit Task" : "Add Task"}
          </Button>
        </div>

        {task.map((task, index) => {
          return (
            <TaskCard
              task={task}
              setTask={setTask}
              key={index}
              index={index}
              setTaskname={setTaskname}
              setDate={setDate}
              setGroup={setGroup}
              setPriority={setPriority}
              isEditTask={isEditTask}
              setIsEditTask={setIsEditTask}
              setEditIndex={setEditIndex}
              handleDelete={handleDelete}
            />
          );
        })}
      </Typography>
    </>
  );
}