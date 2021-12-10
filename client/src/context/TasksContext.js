import { useState, createContext } from 'react'

const TasksContext = createContext()

function TasksProvider(props) {
    const [tasks, setTasks] = useState([])

    return (
        <TasksContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TasksContext.Provider>
    )
}

export { TasksContext, TasksProvider }