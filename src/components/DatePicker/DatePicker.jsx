//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 9 January 2026
//Description: This file contains the entry component for the React Countdown project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange }) {
    return (
      <section className="date-picker" aria-labelledby="date-picker-label">
        <label id="date-picker-label" htmlFor="countdown-date" className="date-label">
          Choose a date
        </label>

        <input
          type="date"
          id="countdown-date"
          className="date-input"
          value={value}
          min={minDate}
          onChange={onChange}
        />
      </section>
    );
};
