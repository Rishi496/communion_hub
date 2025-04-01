import React, { useState } from "react";
import { motion } from "framer-motion";

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Religious",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;
    onAddEvent(formData);
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Religious",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="event-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="form-group">
        <label>Title*</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Date*</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Religious">Religious</option>
          <option value="Cultural">Cultural</option>
          <option value="Social">Social</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Add Event
      </button>
    </motion.form>
  );
};

export default EventForm;
