//Filename: timeUtils.js
//Author: Kyle McColgan
//Date: 14 September 2025
//Description: This file contains a helper function for the Countdown React project.

export function getTimeRemaining(targetDate)
{
    const total = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
}
