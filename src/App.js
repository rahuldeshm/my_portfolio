import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import headerImg from "./assets/png/astrocat.png";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <div
        className={
          "animate__animated animate__zoomIn d-block d-sm-block d-md-none "
        }
      >
        <img src={headerImg} alt="Header Img" />
      </div>
    </div>
  );
}

export default App;
