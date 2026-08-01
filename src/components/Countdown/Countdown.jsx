//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 1 August 2026
//Description: This file contains the parent component for the Countdown React project.

import { useState, useEffect } from "react";
import { getTimeRemaining } from "../../utils/timeUtils";

import "./Countdown.css"

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function Countdown({ targetDate })
{
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() =>
  {
    const update = () =>
    {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const complete = Object.values(timeLeft).every(value => value <= 0);

  if (complete)
  {
    return (
      <section
        className="countdown countdown-complete"
        aria-live="polite"
      >
        <p className="complete-date">September 7, 2026</p>
        <h2 className="complete-title">Happy Labor Day</h2>
        <p className="complete-subtitle">Honoring freedom and independence.</p>
      </section>
    );
  }

  return (
    <section
      className="countdown"
      role="timer"
      aria-live="polite"
      aria-label="Time remaining until the selected date"
    >
      {UNITS.map(({ key, label }) => (
        <article key={key} className="time-unit" aria-label={`${timeLeft[key]} ${label}`}>
          <span className="time-value">
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="time-label" aria-hidden="true">{label}</span>
        </article>
      ))}
    </section>
  );
}

export default Countdown;
