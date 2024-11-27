import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="logo">
          Portfolio
        </NavLink>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar