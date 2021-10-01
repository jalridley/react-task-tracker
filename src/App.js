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

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} />
        </div>
    );
}

export default App;
