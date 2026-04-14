//Filename: timeUtils.js
//Author: Kyle McColgan
//Date: 13 April 2026
//Description: This file contains a helper function for the Countdown React project.

export function getTimeRemaining(targetDate)
{
    const total = Date.parse(targetDate) - Date.now();
    const clamped = Math.max(total, 0);
    const seconds = Math.floor((clamped / 1000) % 60);
    const minutes = Math.floor((clamped / 1000 / 60) % 60);
    const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));

    return { total: clamped, days, hours, minutes, seconds };
}
