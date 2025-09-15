//Filename: App.jsx
//Author: Kyle McColgan
//Date: 14 September 2025
//Description: This file contains the entry component for the Countdown React project.

import Countdown from "./components/Countdown/Countdown.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';

function App()
{
    return (
      <div className="app">
       <Header />
       <main>
         <Countdown targetDate="2025-10-31T00:00:00" />
       </main>
       <Footer />
      </div>
    );
}

export default App;
