import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Timeline from "./pages/Timeline"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import './App.css'

const App = () => {
  return (
    <Router>
      <ParticlesBackground id="tsparticles"/>
      <Navbar />
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404: page not found</h1>} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
