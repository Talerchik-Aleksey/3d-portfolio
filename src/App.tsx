import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Home } from "./pages/home/Home";
import { ThreeScene } from "./pages/viewer/Viewer";
import Works from "./pages/works/Works";

function App() {
  return (
    <div className="text-stone-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/viewer" element={<ThreeScene />} />
      </Routes>
    </div>
  );
}

export default App;
