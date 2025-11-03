//Filename: App.jsx
//Author: Kyle McColgan
//Date: 03 November 2025
//Description: This file contains the entry component for the React Countdown project.

import { useState } from "react";
import Countdown from "./components/Countdown/Countdown.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  //Default Thanksgiving date (November 27th, 2025).
  const [targetDate, setTargetDate] = useState("2025-11-27T00:00:00");
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
       <Header />

       <main className="main-content">
         <Countdown targetDate={targetDate} />

         <section className="date-picker" aria-labelledby="date-picker-label">
           <label id="date-picker-label" htmlFor="countdown-date" className="date-label">
             Choose your own celebration date:
           </label>
           <input
             type="date"
             id="countdown-date"
             min={today}
             onChange={handleDateChange}
             className="date-input"
           />
         </section>
       </main>

       <Footer />
      </div>
    );
}

export default App;
