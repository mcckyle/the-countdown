//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 8 May 2026
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
  const [animate, setAnimate] = useState(false); //Triggers pop animation.
  const hasMounted = useRef(false);

  useEffect(() =>
  {
    const timer = setInterval(() =>
    {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);

      if (hasMounted.current)
      {
        setAnimate((prev) => !prev);
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
        aria-label="Mother's Day has arrived"
      >
        <h2 className="complete-title">Happy Mother&apos;s Day</h2>
        <p className="complete-subtitle">Celebrate the love and care mothers bring into our lives.</p>
      </section>
    );
  }

  return (
    <section
      className="countdown"
      role="timer"
      aria-live="polite"
      aria-label="Time remaining until Mother's Day"
    >
      {UNITS.map(({ key, label }) => (
        <article key={key} className={`time-unit ${animate ? "animate" : ""}`}>
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
