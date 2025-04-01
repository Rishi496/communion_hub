import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="event-header">
        <h3>{event.title}</h3>
        <span className="event-category">{event.category}</span>
      </div>
      <div className="event-details">
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p className="event-description">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
