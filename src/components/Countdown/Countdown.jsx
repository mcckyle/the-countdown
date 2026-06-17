//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 17 June 2026
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
  const mounted = useRef(false);

  useEffect(() =>
  {
    const timer = setInterval(() =>
    {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);

      if (mounted.current)
      {
        setIsTicking((prev) => !prev);
        setTimeout(() => setIsTicking(false), 260);
      }
      else
      {
        mounted.current = true;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const complete = Object.values(timeLeft).every(value => value <= 0);

  if (complete)
  {
    return (
      <section
        className="countdown complete"
        aria-live="polite"
      >
        <span className="complete-badge">June 19, 2026</span>
        <h2 className="complete-title">Happy Juneteenth</h2>
        <p className="complete-subtitle">Honoring freedom and equality.</p>
      </section>
    );
  }

  return (
    <section
      className="countdown"
      role="timer"
      aria-live="polite"
    >
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className={`time-unit ${isTicking ? "tick" : ""}`}
        >
          <span className="time-value">
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="time-label">{label}</span>
        </div>
      ))}
    </section>
  );
}

export default Countdown;
