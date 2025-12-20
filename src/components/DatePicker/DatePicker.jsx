//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 19 December 2025
//Description: This file contains the entry component for the React Countdown project.

import React from "react";
import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange }) {
    return (
        <section className="date-picker" aria-labelledby="date-picker-label">
          <label
            id="date-picker-label"
            htmlFor="countdown-date"
            className="date-label"
          >
            Choose a different date
          </label>

          <input
            type="date"
            id="countdown-date"
            min={minDate}
            onChange={onChange}
            className="date-input"
          />
        </section>
    );
};
