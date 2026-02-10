//Filename: App.jsx
//Author: Kyle McColgan
//Date: 9 February 2026
//Description: This file contains the entry component for the React Countdown project.

import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DatePicker from "./components/DatePicker/DatePicker.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App()
{
  //Target date: Valentine's Day 2026 (February 14th, 2026).
  const [targetDate, setTargetDate] = useState("2026-02-14T00:00:00");
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
