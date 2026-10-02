//Filename: App.jsx
//Author: Kyle McColgan
//Date: 1 October 2026
//Description: This file contains the entry component for the Countdown React project.

import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DatePicker from "./components/DatePicker/DatePicker.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

const INITIAL_TARGET_DATE = "2026-10-12T00:00:00";

function App()
{
  //Target date: Indigenous Peoples' Day 2026 (October 12, 2026).
  const [targetDate, setTargetDate] = useState(INITIAL_TARGET_DATE);
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = ({ target }) =>
  {
    if (!target.value)
    {
      return;
    }

    setTargetDate(`${target.value}T00:00:00`);
  };

    return (
      <div className="app-shell">
        <Header />

        <main className="main">
          <Countdown targetDate={targetDate} />
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
