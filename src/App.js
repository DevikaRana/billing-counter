import "./App.css";
import CounterTable from "./components/counter/CounterTable";
import Room from "./components/room/Room";
//import Waiting from "./components/waitingQueue/Waiting";

function App() {
  return (
    <div className="App">
      <div className="side">
        <CounterTable />
      </div>
      <Room />
    </div>
  );
}

export default App;
