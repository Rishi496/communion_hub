import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <FaHandsHelping className="logo-icon" />
          <span>CommunionHub</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
