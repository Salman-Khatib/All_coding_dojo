
import './App.css';
import PersonCard from './components/PersonCard';
import Person2 from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"  firstName2="Smith" lastName2="John" age2={88} hairColor2="Brown" firstName3="Filmore" lastName3="Millard" age3={50} hairColor3="Brown"  firstName4="Smith" lastName4="Maira" age4={62} hairColor4="Brown"/>

    </div>
  );
}

export default App;
