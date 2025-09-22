//Filename: App.jsx
//Author: Kyle McColgan
//Date: 21 September 2025
//Description: This file contains the entry component for the Countdown React project.

import { useState } from "react";
import Countdown from "./components/Countdown/Countdown.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';

function App()
{
  //Default date = Halloween 🎃
  const [targetDate, setTargetDate] = useState("2025-10-31T00:00:00");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const pickedDate = e.target.value;

    if (pickedDate)
    {
        setTargetDate(`${pickedDate}T00:00:00`);
    }
  };

    return (
      <div className="app">
       <Header />

       <main>
         <section className="date-picker" aria-labelledby="date-picker-label">
           <label id="date-picker-label" htmlFor="countdown-date" className="date-label">
             Pick a target date:
           </label>
           <input
             type="date"
             id="countdown-date"
             min={today}
             onChange={handleDateChange}
             className="date-input"
           />
         </section>

         <Countdown targetDate={targetDate} />
       </main>

       <Footer />
      </div>
    );
}

export default App;
