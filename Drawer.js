import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InfoIcon from "@mui/icons-material/Info";
import TodayIcon from "@mui/icons-material/Today";
import ListIcon from "@mui/icons-material/List";
import { Icon } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Switch, Link, Route } from "react-router-dom";
import { About } from "./About";
import { GroupTasks } from "./GroupTasks";
import { TodayTasks } from "./TodayTasks";
import { TaskList } from "./TaskList.js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ tasks }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [taskname, setTaskname] = React.useState("");
  const [date, setDate] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [group, setGroup] = React.useState("");
  const [task, setTask] = React.useState(tasks);
  const [isEditTask, setIsEditTask] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState("");

  //Create a new Task
  const addTaskName = () => {
    setTask([
      ...task,
      {
        taskName: taskname,
        date: date,
        isCompleted: false,
        taskGroup: group,
        priority: priority,
      },
    ]);
    setTaskname("");
    setDate("");
    setPriority("");
    setGroup("");
  };

  //Update existing task details
  const editTaskName = (id) => {
    const tempTask = task;
    tempTask[id].taskName = taskname;
    tempTask[id].date = date;
    tempTask[id].taskGroup = group;
    tempTask[id].priority = priority;
    setTask([...tempTask]);
    setTaskname("");
    setDate("");
    setPriority("");
    setGroup("");
    setIsEditTask(false);
  };

  //Delete a selected task
  const handleDelete = (index) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            alert("Task Deleted");
            let newTask = task;
            newTask.splice(index, 1);
            setTask([...newTask]);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            <Icon>
              <CheckBoxIcon />
            </Icon>
            &nbsp;&nbsp;To-do App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "GrayText" }}>
            <ListItem button key="Inbox">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </Link>
          <Link
            to="/today"
            style={{ textDecoration: "none", color: "GrayText" }}
          >
            <ListItem button key="Today">
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Today" />
            </ListItem>
          </Link>
          <Link
            to="/groups"
            style={{ textDecoration: "none", color: "GrayText" }}
          >
            <ListItem button key="Task Groups">
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Task Groups" />
            </ListItem>
          </Link>
          <Link
            to="about"
            style={{ textDecoration: "none", color: "GrayText" }}
          >
            <ListItem button key="About">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Switch>
          <Route exact path="/">
            <TaskList
              setTaskname={setTaskname}
              taskname={taskname}
              setDate={setDate}
              date={date}
              group={group}
              setGroup={setGroup}
              priority={priority}
              setPriority={setPriority}
              addTaskName={addTaskName}
              editTaskName={editTaskName}
              task={task}
              setTask={setTask}
              isEditTask={isEditTask}
              setIsEditTask={setIsEditTask}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
              handleDelete={handleDelete}
            />
          </Route>
          <Route exact path="/today">
            <TodayTasks task={task} />
          </Route>
          <Route exact path="/groups">
            <GroupTasks task={task} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}