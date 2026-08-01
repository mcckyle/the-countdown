//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 1 August 2026
//Description: This file contains the entry component for the Countdown React project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange })
{
  return (
    <section className="date-picker" aria-labelledby="countdown-date-label">
      <label htmlFor="countdown-date" className="date-label" id="countdown-date-label">
        Countdown Date
      </label>

      <input
          id="countdown-date"
          type="date"
          className="date-input"
          value={value}
          min={minDate}
          onChange={onChange}
          aria-describedby="countdown-date-help"
        />

      <p className="date-help" id="countdown-date-help">
        Choose a future celebration date.
      </p>
    </section>
  );
};
