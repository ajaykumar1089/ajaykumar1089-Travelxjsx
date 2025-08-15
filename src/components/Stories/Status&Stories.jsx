// App.jsx
import React, { useState } from "react";
import "./Status&Stories.css"
import StatusCircle from "./StatusCircle";
import StatusViewer from "./StatusViewer"; // from previous code

export default function App() {
  const [activeStatus, setActiveStatus] = useState(null);

  const users = [
    {
      name: "Sugan",
      image: "https://placekitten.com/200/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/800/500" },
        { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      name: "Amit",
      image: "https://placekitten.com/201/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/801/500" },
      ],
    },
    {
      name: "Jaidev Lodh",
      image: "https://placekitten.com/202/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/802/500" },
        { type: "image", url: "https://placekitten.com/803/500" },
      ],
    },
    {
      name: "Aparna",
      image: "https://placekitten.com/200/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/800/500" },
        { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      name: "Sushmita",
      image: "https://placekitten.com/201/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/801/500" },
      ],
    },
    {
      name: "Pappu",
      image: "https://placekitten.com/202/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/802/500" },
        { type: "image", url: "https://placekitten.com/803/500" },
      ],
    },
   
    {
      name: "Anita",
      image: "https://placekitten.com/201/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/801/500" },
      ],
    },
    {
      name: "Prateek Yadav",
      image: "https://placekitten.com/202/200",
      statuses: [
        { type: "image", url: "https://placekitten.com/802/500" },
        { type: "image", url: "https://placekitten.com/803/500" },
      ],
    },
  ];

  return (
    <div className="main-content container">
      <div className="container">

        <div style={{ padding: "20px" }}>
          {/* Horizontal scroll of circles */}
          <div style={{ display: "flex", overflowX: "auto" }}>
            {users.map((user, idx) => (
              <StatusCircle
                key={idx}
                image={user.image}
                name={user.name}
                onClick={() => setActiveStatus(user)}
              />
            ))}
          </div>

          {/* Open Status Viewer */}
          {activeStatus && (
            <StatusViewer
              statuses={activeStatus.statuses}
              onClose={() => setActiveStatus(null)}
            />
          )}

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
    </div>



  );
}
