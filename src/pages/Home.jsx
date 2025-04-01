import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/animations.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Connecting People Across Faiths & Interests
          </h1>
          <p className="hero-description">
            CommunionHub brings together people from all walks of life to share,
            learn, and grow through meaningful events and connections.
          </p>
          <Link to="/events" className="cta-button pulse">
            Explore Events
          </Link>
        </motion.div>
      </section>

      <section className="about-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2>Welcome to Communion App</h2>
          <p>
            Our platform is dedicated to fostering understanding and community
            among people of all faiths and backgrounds. Whether you're looking
            for spiritual growth, cultural exchange, or simply to meet
            like-minded individuals, CommunionHub is your gateway to meaningful
            connections.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
