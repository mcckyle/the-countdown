//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 11 May 2026
//Description: This file contains the entry component for the Countdown React project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange }) {
  return (
    <div
      className="date-picker"
      role="group"
      aria-labelledby="date-picker-label"
    >
      <label
        id="date-picker-label"
        htmlFor="countdown-date"
        className="date-label"
      >
        Select a date
      </label>

      <div className="date-input-shell">
        <input
          type="date"
          id="countdown-date"
          className="date-input"
          value={value}
          min={minDate}
          onChange={onChange}
          aria-describedby="date-help"
        />
      </div>

      <span id="date-help" className="date-help">
        Choose a future celebration date.
      </span>
    </div>
  );
};
