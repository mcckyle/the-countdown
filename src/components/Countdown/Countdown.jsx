//Filename: Countdown.jsx
//Author: Kyle McColgan
//Date: 15 September 2025
//Description: This file contains the parent component for the Countdown React project.

import { useEffect, useState } from "react";
import { getTimeRemaining } from "../../utils/timeUtils";

import "./Countdown.css"

function Countdown({ targetDate })
{
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="countdown" aria-label="Countdown Timer">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="time-box">
                <span className="time-value" aria-label={`${timeLeft[unit]} ${unit}`}>
                  {timeLeft[unit]}
                </span>
                <span className="time-label">{unit}</span>
                </div>
            ))}
        </section>
    );
}

export default Countdown;
