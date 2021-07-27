
import './App.css';
import Form from './Components/Form';
import {Router} from '@reach/router'
import Show from './Components/show';

function App() {
  return (
    <div className="App">

      <Form/>
      <Router>
        <Show path="/:resource/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
