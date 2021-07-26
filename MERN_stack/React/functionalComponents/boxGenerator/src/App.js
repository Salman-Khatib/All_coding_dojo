
import './App.css';

import React, {useState} from 'react';

import Form from './Components/createBox'
import Divs from './Components/Boxes'
function App() {



  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  }

  return (
    <div className="App">
      <Form addBox={addBox} />
      <Divs boxes={boxes}/>
    </div>
  );
}

export default App;
