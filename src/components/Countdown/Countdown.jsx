//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 4 June 2026
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
  const [isTicking, setIsTicking] = useState(false); //Triggers pop animation.
  const hasMounted = useRef(false);

  useEffect(() =>
  {
    const timer = setInterval(() =>
    {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);

      if (hasMounted.current)
      {
        setIsTicking((prev) => !prev);
      }
      else
      {
        hasMounted.current = true;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isComplete = Object.values(timeLeft).every((value) => value <= 0);

  if (isComplete)
  {
    return (
      <section
        className="countdown complete"
        aria-live="polite"
        aria-label="Flag Day has arrived"
      >
        <div className="complete-badge">June 14, 2026</div>
        <h2 className="complete-title">Happy Flag Day</h2>
        <p className="complete-subtitle">Honoring the American flag and the values it represents.</p>
      </section>
    );
  }

  return (
    <section
      className="countdown"
      role="timer"
      aria-live="polite"
      aria-label="Time remaining until Flag Day 2026"
    >
      {UNITS.map(({ key, label }) => (
        <article key={key} className={`time-unit ${isTicking ? "tick" : ""}`}>
          <span className="time-value">
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="time-label">{label}</span>
        </article>
      ))}
    </section>
  );
}

export default Countdown;
