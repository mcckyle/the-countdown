//Filename: App.jsx
//Author: Kyle McColgan
//Date: 24 April 2026
//Description: This file contains the entry component for the Countdown React project.

import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DatePicker from "./components/DatePicker/DatePicker.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  //Target date: Cinco de Mayo 2026 (May 5, 2026).
  const [targetDate, setTargetDate] = useState("2026-05-05T00:00:00");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const date = e.target.value;

    if (date)
    {
      setTargetDate(`${date}T00:00:00`);
    }
  };

    return (
      <div className="app">
        <div className="app-shell">
          <Header />

          <main className="main">
            <section className="countdown-section">
              <Countdown targetDate={targetDate} />
            </section>

            <section className="date-section">
              <DatePicker
                value={targetDate.split("T")[0]}
                minDate={today}
                onChange={handleDateChange}
              />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    );
}

export default App;
