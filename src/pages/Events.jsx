import React, { useState } from "react";
import EventCard from "../Component/EventCard";
import EventForm from "../Component/EventForm";
import Filter from "../Component/Filter";
import { motion } from "framer-motion";
import "../styles/animations.css";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Interfaith Dialogue",
      date: "2025-04-15",
      location: "Community Center, Main Hall",
      description:
        "Join us for an open discussion about different faith traditions and shared values.",
      category: "Religious",
    },
    {
      id: 2,
      title: "Cultural Potluck Dinner",
      date: "2025-04-22",
      location: "City Park Pavilion",
      description:
        "Share your favorite dishes and learn about different cultures through food.",
      category: "Cultural",
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "2025-05-05",
      location: "Downtown Area",
      description:
        "Volunteer with us to clean up the city and help those in need.",
      category: "Social",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setShowForm(false);
  };

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="events-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="events-container"
      >
        <div className="events-header">
          <h1>Upcoming Events</h1>
          <Filter currentFilter={filter} onFilterChange={setFilter} />
          <button
            onClick={() => setShowForm(!showForm)}
            className="add-event-button"
          >
            {showForm ? "Cancel" : "Add New Event"}
          </button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EventForm onAddEvent={handleAddEvent} />
          </motion.div>
        )}

        <div className="events-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="no-events">No events found in this category.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
