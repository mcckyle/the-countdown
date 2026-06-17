//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the entry component for the Countdown React project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange })
{
  return (
    <div className="date-picker">
      <label htmlFor="countdown-date" className="date-label">
        Choose date
      </label>

      <input
          type="date"
          id="countdown-date"
          className="date-input"
          value={value}
          min={minDate}
          onChange={onChange}
        />

      <p className="date-help">
        Select another future celebration date.
      </p>
    </div>
  );
};
