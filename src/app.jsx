
import Root from "./routes/root"
import Skills from "./routes/skills"
import Projects from "./routes/projects"
import Contact from "./routes/contact"
import DetailProject from "./routes/detailProject"

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/detailproject" element={<DetailProject/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
