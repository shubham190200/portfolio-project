import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
    <div className="App">
    
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>} />
   <Route path="/contact" element={<Contact/>} />
   <Route path="/skills" element={<Skills/>} />
   <Route path="/projects" element={<Projects/>} />
  
 </Routes>

    </div>
    </Router>
  );
}

export default App;
