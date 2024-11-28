import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
        {/* logo */}
        <div className="logo">Portfolio</div>

        {/* hamburger icon (only visible on small screens) */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? 'x' : '☰'}
        </div>
  
        {/* navigation links (visible when menu is open on small screens) */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/timeline">Timeline</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar