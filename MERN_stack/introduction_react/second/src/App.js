import './App.css';
import React from 'react';
import {Compenents} from './components/Compenents';


function App() {
  return (
    <div className="App">
      <Compenents/>
     <h1>Hello Dojo!</h1>
     <h2>Things I need to do:</h2>
     <ul>
       <li>Learn React</li>
       <li>Climb Mt.Everest</li>
       <li>Run a marthon</li>
       <li>feed the Dogs</li>
     </ul>
    </div>
  );
}

export default App;
