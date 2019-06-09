// import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () =>{
    return (
      <div>
          <label htmlFor='name' className='label'>
              Enter name:
          </label>
          <input id='name'/>
          {/* <button style="background-color:red; color:green;">Submit</button>  in html */}
          {/* <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>  in jsx */}
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
            {buttonVal()}
        </button>  
      </div>  
    )
};

function buttonVal(){
    return 'Click here!'
}

// Take React component and Show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
