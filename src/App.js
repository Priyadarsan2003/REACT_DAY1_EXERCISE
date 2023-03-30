import logo from './logo.svg';
import './App.css';
import Primitive from './Component/Primitive';
import World from './Component/World';

function App() {
  return (
    <div className="App">
      {/* <button onClick={<h1>Let we see the output of JAVASCRIPT</h1>}></button> */}
      <Primitive />
      <World />
    </div>
  );
}

export default App;
