//  as a class needs import react/  react.component has lifecycle methods etc
// import React from 'react';

// class App extends React.Component {
//     render() {
//         return <h1>class component</h1>;
//     }
// }
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    // state for show add  task form
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor',
            day: '01.12.2021 at 10am',
            reminder: true,
        },
        {
            id: 2,
            text: 'coffee with babe',
            day: '04.12.2021 at 4pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'flight',
            day: '18.12.2021 at 7am',
            reminder: false,
        },
    ]);

    // add task
    const addTask = task => {
        // must create id since there is no backend to do it automatically
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // delete task
    const deleteTask = id => {
        // setting state to tasks that are not the chosen id to delete
        setTasks(tasks.filter(task => task.id !== id));
    };

    // toggle reminder
    const toggleReminder = id => {
        setTasks(
            tasks.map(task =>
                // set reminder to opposite if it is the chose id
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            {/* add button to show add task form */}
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {/* short way of doing turnary without and else uses && */}
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No tasks to show'
            )}
        </div>
    );
}

export default App;
