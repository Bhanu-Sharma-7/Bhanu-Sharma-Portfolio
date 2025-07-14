import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme(); // No longer needed

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="logo-bracket">{"</"}</span>
            <span className="logo-text">BhanuSharma</span>
            <span className="logo-bracket">{">"}</span>
          </Link>
        </motion.div>

        <ul className="nav-items">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              className="nav-item"
              whileHover={{ y: -2 }}
            >
              <Link to={item.href} className="nav-link">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 