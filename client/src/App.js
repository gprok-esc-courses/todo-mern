import './App.css';
import { TasksProvider } from './context/TasksContext'
import Tasks from './components/Tasks';


function App() {
  return (
    <TasksProvider>
      <div className="App">
        <h1>TASKS</h1>
        <Tasks />
      </div>
    </TasksProvider>
  );
}

export default App;
