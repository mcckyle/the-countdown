//Filename: App.jsx
//Author: Kyle McColgan
//Date: 23 February 2026
//Description: This file contains the entry component for the React Countdown project.

import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DatePicker from "./components/DatePicker/DatePicker.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  //Target date: RE9 Release Day 2026 (February 27th, 2026).
  const [targetDate, setTargetDate] = useState("2026-02-27T00:00:00");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const date = e.target.value;

    if ( ! date)
    {
        return;
    }

    setTargetDate(`${date}T00:00:00`);
  };

    return (
      <div className="app">
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
    );
}

export default App;
