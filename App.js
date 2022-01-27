import './App.css';
import MiniDrawer from './Drawer';

function App() {

  //Sample local data
  const tasks = [
    {
      taskName: "Get Groceries",
      taskGroup: "shopping",
      date: "2021-09-30",
      priority: "low",
      isCompleted: false
    },
    {
      taskName: "Vaccination 2nd dose",
      taskGroup: "health",
      date: "2021-09-24",
      priority: "high",
      isCompleted: false
    },
    {
      taskName: "Purchase mobile for sister in Amazon Sale",
      taskGroup: "shopping",
      date: "2021-10-12",
      priority: "medium",
      isCompleted: false
    },
    {
    taskName: "Find good charity fund",
    taskGroup: "general",
    date: "2021-09-29",
    priority: "low",
    isCompleted: false
    }
  ];

  return (
    //Main component
    <div className="App">
    <MiniDrawer tasks={tasks}/>
    </div>
  );
}

export default App;