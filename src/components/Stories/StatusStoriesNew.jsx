//latest working


import "leaflet/dist/leaflet.css";
import "leaflet-ant-path";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./StatusStoriesNew.css"
import StatusCircle from "./StatusCircle";



const StatusSroriesNew = () => {

  return (
    <>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </div>
      <div>
        <div className="travel-icon-buttons-container">  <div
          className="map-page"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div className="filter-bar">
            <StatusCircle />
          </div>
          <div className="main-content container">
            <div className="container">

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
        </div>
      </div>
    </>
  );
};

export default StatusSroriesNew;