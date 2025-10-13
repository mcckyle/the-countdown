//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 13 October 2025
//Description: This file contains the parent component for the Countdown React project.

import { useEffect, useState } from "react";
import { getTimeRemaining } from "../../utils/timeUtils";

import "./Countdown.css"

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
            <section className="countdown past" aria-label="Countdown Timer">
              <p className="past-message">That date has already passed 🎃</p>
            </section>
        );
    }

    return (
        <section className="countdown" aria-label="Countdown Timer">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="time-box">
                  <span className="time-value">{timeLeft[unit]}</span>
                  <span className="time-label">{unit}</span>
                </div>
            ))}
        </section>
    );
}

export default Countdown;
