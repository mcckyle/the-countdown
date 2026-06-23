//Filename: App.jsx
//Author: Kyle McColgan
//Date: 22 June 2026
//Description: This file contains the entry component for the Countdown React project.

import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DatePicker from "./components/DatePicker/DatePicker.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  //Target date: Independence Day 2026 (July 4, 2026).
  const [targetDate, setTargetDate] = useState("2026-07-04T00:00:00");
  const today = new Date().toISOString().split("T")[0];

  function handleDateChange(e)
  {
    const date = e.target.value;

    if (date)
    {
      setTargetDate(`${date}T00:00:00`);
    }
  };

    return (
      <div className="app-shell">
        <Header />

        <main className="main">
          <section className="countdown-section">
            <Countdown targetDate={targetDate} />
          </section>
          <DatePicker
            value={targetDate.split("T")[0]}
            minDate={today}
            onChange={handleDateChange}
          />
        </main>

        <Footer />
      </div>
    );
}

export default App;
