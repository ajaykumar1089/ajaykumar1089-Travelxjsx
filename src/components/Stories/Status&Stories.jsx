// App.jsx
import React from "react";
import "./Status&Stories.css"
import StatusCircle from "./StatusCircle";
// import Status from "./Status"; // from previous code

export default function App() {

  return (
    <div className="main-content container">
      <div className="container">
       <StatusCircle/>
        <h1>Inspiring Travel Stories</h1>
        <div className="story">
          <img src={require('../../assets/beachtrip.webp')} alt="Beach Trip" />
          <div className="story-content">
            <h2>Finding Peace in Bali</h2>
            <p>After months of burnout, I took a solo trip to Bali. From morning yoga sessions to evening sunsets by the
              beach, I rediscovered myself one sunrise at a time. A journey that changed everything.</p>
          </div>
        </div>
        <div className="story">
          <img src={require('../../assets/mountainadventure.webp')} alt="Mountain Adventure" />
          <div className="story-content">
            <h2>Climbing the Andes</h2>
            <p>Trekking through the Andes was both a challenge and a revelation. The thin air, snow-capped views, and
              moments of solitude gave me a new perspective on endurance and beauty.</p>
          </div>
        </div>
        <div className="story">
          <img src={require('../../assets/europeancity.webp')} alt="European City" />
          <div className="story-content">
            <h2>Wandering in Prague</h2>
            <p>Wandering aimlessly through the cobbled streets of Prague, I stumbled upon hidden jazz clubs, fairytale
              architecture, and the kindness of strangers. Every turn felt like a scene from a movie.</p>
          </div>
        </div>
      </div>
    </div>
  );
}