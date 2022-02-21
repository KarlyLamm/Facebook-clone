import "./App.css";
import Header from "./Header";
import Left from "./Left.js";
import M from "./M";
import Status from "./Status";
import Mnews from "./Mnews";
import Friendslist from "./Friendslist";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="facebook">
        <Left />
        <M />
      </div>
      <Status />
      <Mnews />
      <Friendslist />
    </div>
  );
}

export default App;
