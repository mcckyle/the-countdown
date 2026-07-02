//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 1 July 2026
//Description: This file contains the entry component for the Countdown React project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange })
{
  return (
    <section className="date-picker">
      <label htmlFor="countdown-date" className="date-label">
        Countdown Date
      </label>

      <input
          id="countdown-date"
          type="date"
          className="date-input"
          value={value}
          min={minDate}
          onChange={onChange}
        />

      <p className="date-help">
        Choose a future celebration date.
      </p>
    </section>
  );
};
