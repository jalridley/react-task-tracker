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

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor',
            day: '01.12.2021 at 10am',
            reminder: 'true',
        },
        {
            id: 2,
            text: 'coffee with babe',
            day: '04.12.2021 at 4pm',
            reminder: 'true',
        },
        {
            id: 3,
            text: 'flight',
            day: '18.12.2021 at 7am',
            reminder: 'false',
        },
    ]);

    // delete task
    const deleteTask = id => {
        // setting state to tasks that are not the chosen id to delete
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} />
            ) : (
                'No tasks to show'
            )}
        </div>
    );
}

export default App;
