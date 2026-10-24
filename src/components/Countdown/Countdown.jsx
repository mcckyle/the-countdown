//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 23 October 2026
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
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  const complete = Object.values(timeLeft).every(value => value <= 0);
  const formattedDate = new Date(targetDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  if (complete)
  {
    return (
      <section
        className="countdown countdown-complete"
        aria-live="polite"
        aria-labelledby="complete-title"
      >
        <p className="complete-date">{formattedDate}</p>
        <h2 id="complete-title" className="complete-title">Happy Halloween</h2>
        <p className="complete-subtitle">Celebrating the ancient traditions of All Hallows' Eve.</p>
      </section>
    );
  }

  return (
    <section
      className="countdown"
      role="timer"
      aria-live="off"
      aria-label={`Time remaining until the ${formattedDate}`}
    >
      {UNITS.map(({ key, label }) => (
        <article
          key={key}
          className="time-unit"
          aria-label={`${timeLeft[key]} ${label}`}
        >
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
