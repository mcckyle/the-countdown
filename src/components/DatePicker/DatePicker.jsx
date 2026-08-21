//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 20 August 2026
//Description: This file contains the entry component for the Countdown React project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange })
{
  return (
    <section className="date-picker" aria-labelledby="countdown-date-label">
      <label id="countdown-date-label" className="date-label" htmlFor="countdown-date">
        Countdown Date
      </label>

      <input
        id="countdown-date"
        className="date-input"
        type="date"
        value={value}
        min={minDate}
        onChange={onChange}
        aria-describedby="countdown-date-help"
        />

      <p id="countdown-date-help" className="date-help">
        Choose a future celebration date.
      </p>
    </section>
  );
};
