//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 22 June 2026
//Description: This file contains the parent component for the Countdown React project.

import { useState, useEffect, useRef } from "react";
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
  const [pulse, setPulse] = useState(0);

  useEffect(() =>
  {
    const update = () =>
    {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      setPulse(value => value + 1);
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const complete = Object.values(timeLeft).every(value => value <= 0);

  if (complete)
  {
    return (
      <div
        className="countdown complete"
        aria-live="polite"
      >
        <span className="complete-badge">July 4, 2026</span>
        <h2 className="complete-title">Happy Independence Day</h2>
        <p className="complete-subtitle">Honoring freedom and independence.</p>
      </div>
    );
  }

  return (
    <div
      className="countdown"
      role="timer"
      aria-live="polite"
    >
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="time-unit"
        >
          <span key={`${key}-${pulse}`} className="time-value">
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="time-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
