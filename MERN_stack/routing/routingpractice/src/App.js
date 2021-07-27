
import './App.css';
import HomePage from './Components/homePage';
import {Router} from '@reach/router';
import Numberss from './Components/number';
function App() {
  return (
    <div className="App">
      <h1>This is the empty route</h1>
     <Router>
       <HomePage path="/home/"></HomePage>
       <Numberss path="/:id"></Numberss>
       <Numberss path="/:id/:lcolor/:bcolor"></Numberss>
       




     </Router>
    </div>
  );
}

export default App;
