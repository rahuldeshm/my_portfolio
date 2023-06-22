import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
