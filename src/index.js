// import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () =>{
    return <div>Hello World</div>
};

// Take React component and Show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
