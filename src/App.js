import "./App.css";
import Header from "./Header";
import Left from "./Left.js";
import M from "./M";
import Status from "./Status";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="facebook">
        <Left />
        <M />
      </div>
      <Status />
    </div>
  );
}

export default App;
