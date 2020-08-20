import React from "react";
import "./app.css";
import Header from "../header/header";
import Card from "../card/card";

class App extends React.Component {
  render() {
    const pwas = [
      {
        appName: "INTERVAL TIMER",
        appDesc: "Programmable timer for interval based workouts.",
        appFaIcon: "fa fa-clock-o fa-5x",
        appUrl: "https://kiuxh.csb.app/"
      },
      {
        appName: "CALCULATOR",
        appDesc: "Standard calculator.",
        appFaIcon: "fa fa-calculator fa-5x",
        appUrl: "https://d0rsq.csb.app/"
      }
    ];

    const cards = pwas.map((pwa, index) => (
      <Card
        appName={pwa.appName}
        appDesc={pwa.appDesc}
        appFaIcon={pwa.appFaIcon}
        appUrl={pwa.appUrl}
        key={index}
      />
    ));
    return (
      <div className="app">
        <Header />
        {cards}
      </div>
    );
  }
}

export default App;
