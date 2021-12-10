import { TasksContext } from '../context/TasksContext'
import Task from './Task';

const { useContext, useEffect } = require("react");


function Tasks() {
    const [tasks, setTasks] = useContext(TasksContext)

    useEffect(() => {
        fetch('http://localhost:3100/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
    })

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <Task key={task._id} task={task} />
                )
            })}
        </div>
    )
}

export default Tasks