//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 30 January 2026
//Description: This file contains the parent component for the Countdown React project.

import { useEffect, useState } from "react";
import { getTimeRemaining } from "../../utils/timeUtils";

import "./Countdown.css"

const UNITS = ["days", "hours", "minutes", "seconds"];

function Countdown({ targetDate })
{
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getTimeRemaining(targetDate);
            setTimeLeft(remaining);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const isComplete = Object.values(timeLeft).every((value) => value <= 0);

    if (isComplete)
    {
        return (
          <section
            className="countdown countdown-complete"
            aria-live="polite"
            aria-label="Countdown complete"
          >
            <p className="complete-message">❤️ The moment is here</p>
            <span className="complete-subtle">
              Take it in. Celebrate. Remember it.
            </span>
          </section>
        );
    }

    return (
      <section
        className="countdown"
        role="timer"
        aria-label="Time remaining"
      >
        {UNITS.map((unit) => (
          <div key={unit} className="time-box">
            <span className="time-value">
              {String(timeLeft[unit]).padStart(2, "0")}
            </span>
            <span className="time-label">{unit}</span>
          </div>
        ))}
      </section>
    );
}

export default Countdown;
