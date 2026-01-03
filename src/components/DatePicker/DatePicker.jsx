//Filename: DatePicker.jsx
//Author: Kyle McColgan
//Date: 2 January 2026
//Description: This file contains the entry component for the React Countdown project.

import "./DatePicker.css";

export default function DatePicker ({ value, minDate, onChange }) {
    return (
        <section className="date-picker" aria-label="Select target date">
          <label htmlFor="countdown-date" className="date-label">
            Target date
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
