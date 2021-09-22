//  as a class needs import react/  react.component has lifecycle methods etc
// import React from 'react';

// class App extends React.Component {
//     render() {
//         return <h1>class component</h1>;
//     }
// }

import Header from './components/Header';

function App() {
    return (
        <div className="container">
            <Header />
        </div>
    );
}

export default App;
