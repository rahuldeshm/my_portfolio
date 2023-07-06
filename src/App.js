import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
