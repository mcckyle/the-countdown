//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 22 December 2025
//Description: This file contains the parent component for the Countdown React project.

import { useEffect, useState } from "react";
import { getTimeRemaining } from "../../utils/timeUtils";

import "./Countdown.css"

const UNITS = ["days", "hours", "minutes", "seconds"];

function Countdown({ targetDate })
{
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
    const [isPast, setIsPast] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getTimeRemaining(targetDate);

            //Check if the date has already passed by...
            const past = Object.values(remaining).every((value) => value <= 0);
            setIsPast(past);
            setTimeLeft(remaining);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (isPast)
    {
        return (
          <section
            className="countdown countdown-past"
            aria-live="polite"
          >
            <p className="past-message">
              🎄 The moment has arrived.
            </p>
          </section>
        );
    }

    return (
      <section className="countdown" aria-label="Time remaining">
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
