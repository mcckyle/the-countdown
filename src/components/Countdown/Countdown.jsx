//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 23 February 2026
//Description: This file contains the parent component for the Countdown React project.

import { useEffect, useRef, useState } from "react";
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
    const [tick, setTick] = useState(false); //Triggers pop animation.
    const hasMounted = useRef(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getTimeRemaining(targetDate);
            setTimeLeft(remaining);

            if (hasMounted.current)
            {
              setTick(prev => ! prev);
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
            className="countdowncomplete"
            aria-live="polite"
            aria-label="Countdown complete"
          >
            <h2 className="complete-title">Launch Day</h2>
            <p className="complete-subtitle">
              The wait is over.
            </p>
          </section>
        );
    }

    return (
      <section
        className="countdown"
        role="timer"
        aria-live="polite"
        aria-label="Time remaining until launch"
      >
        {UNITS.map(({ key, label }) => (
          <div key={key} className={`time-unit ${tick ? "tick" : ""}`}>
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
