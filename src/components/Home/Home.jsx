import React from 'react';
import "./Home.css";

// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     padding: "0",
//     margin: "0",
//     backgroundColor: "black",
//   },
//   hero: {
//     backgroundImage: `url(${background})`, // Replace with your image URL
//     logo: `url(${logo})`,
//     height: "600px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "black",
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//   },
//   section: {
//     padding: "40px 20px",
//     textAlign: "center",
//   },
//   cardContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   card: {
//     backgroundColor: "white",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     width: "300px",
//     overflow: "hidden",
//   },
//   cardImage: {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover",
//   },

//   button: {
//     backgroundColor: "#3498db",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// const slide = () => {
//   let currentIndex = 0;
//   const slider = document.getElementById('slider');
//   const slides = document.querySelectorAll('.slide');

  // function moveSlide(step) {
  //   currentIndex = (currentIndex + step + slides.length) % slides.length;
  //   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  // }

  // let sliderUser = document.getElementById('sliderUser');
  // let currentIndexUser = 0;

  // function slide(direction) {
  //   const boxWidth = 150; // user-box width
  //   const totalBoxes = sliderUser.children.length;
  //   const visibleBoxes = Math.floor(document.querySelector('.slider-containerUser').offsetWidth / boxWidth);

  //   currentIndexUser += direction;

  //   if (currentIndexUser < 0) currentIndexUser = 0;
  //   if (currentIndexUser > totalBoxes - visibleBoxes) currentIndexUser = totalBoxes - visibleBoxes;
  //   sliderUser.style.transform = `translateX(-${currentIndexUser * boxWidth}px)`;
  // }
// };

const Home = () => {
  return (
   <>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </div>      
      <div>
        <main>
          <div className="main-content container">
            <div className="booking-form">
              <div className="places">
                <div className="place-card">
                  {/* <!-- CamperVan icon animated traveller in  <i  element html --> */}
                  <i className="fas fa-shuttle-van campervan-icon"></i>
                  <h3>Camper Home Van
                  </h3>
                </div>
                <div className="place-card">
                  <i className="fas fa-hotel"></i>
                  <h3>Hotels & Home Stays</h3>
                </div>
                <div className="place-card">
                  <i className="fas fa-car"></i>
                  <h3>Rented Cars</h3>
                </div>
                <div className="place-card">
                  <i className="fas fa-motorcycle"></i>
                  <h3>Scooty</h3>
                </div>

                <div className="place-card">
                  {/* <!-- Tourist Guide Icon --> */}
                  <i className="fas fa-user-tie guide-icon" title="Hire Tourist Guide"></i>
                  <h3>Hire Trip Coach</h3>
                </div>

                <div className="place-card">
                  <i className="fas fa-person traveller-icon">
                    <i className="fas fa-camera camera-bag"></i>
                  </i>
                  <h3>Hire Photographer</h3>
                </div>
                <div className="place-card">
                  <i className="fas fa-ship"></i>
                  <h3>Boat & Ferries</h3>
                </div>

                <div className="place-card">
                  <i className="fas fa-ticket-alt"></i>
                  <h3>Tickets & Events</h3>
                </div>

                <div className="place-card">
                  <i className="fas fa-money-bill-wave"></i>
                  <i className="fas fa-right-left"></i>
                  <h3>Forex Exchange</h3>
                </div>
                <div className="place-card">
                  <i className="fas fa-map-marked-alt"></i>
                  <h3>Tourist Map</h3>
                </div>
              </div>
              <div className="booking-form">
                <div className="places">
                  <div className="trip-type">
                    <label><input type="radio" name="tripType" value="oneway" checked /> One Way</label>
                    <label><input type="radio" name="tripType" value="roundtrip" /> Round Trip</label>
                  </div>
                  <div className="form-group">
                    <label for="from">From Location</label>
                    <input type="text" id="from" name="from" placeholder="City or Airport" />
                  </div>
                  <div className="form-group">
                    <label for="to">To Location</label>
                    <input type="text" id="to" name="to" placeholder="City or Airport" />
                  </div>
                  <div className="form-group">
                    <label for="departure">Departure Date</label>
                    <input type="date" id="departure" name="departure" />
                  </div>
                  <div className="form-group" id="returnDateGroup">
                    <label for="return">Return Date</label>
                    <input type="date" id="return" name="return" />
                  </div>
                  <div className="form-group">
                    <label for="travellers">Travellers</label>
                    <input type="number" id="travellers" name="travellers" min="1" value="1" />
                  </div>
                  <button className="submit-btn">Search</button>
                </div>
              </div>
            </div>
            <h2 >Top Rated Tourist Attractions, Home Stays, Traveller Groups, Best Local Cuisines, Route Map@destinationcity </h2>
            <iframe  title="goog"  
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301"
              allowfullscreen>
            </iframe>
     
            <h2>Online Profiles Around the World</h2>
            <div className="slider-containerUser">
              <button className="arrowUser left" >&#10094;</button>
              <div className="sliderUser" id="sliderUser">
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez/" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Aiko Tanaka" />
                    <div className="profile-name">Aiko Tanaka</div>
                    <div className="profile-location">Tokyo, Japan<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                  
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Jane Smith" />
                    <div className="profile-name">Jane Smith</div>
                    <div className="profile-location">London, UK<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>

                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" />
                    <div className="profile-name">John Doe</div>
                    <div className="profile-location">New York, USA<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" />
                    <div className="profile-name">John Doe</div>
                    <div className="profile-location">New York, USA<div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </div>
                  </div>
                </div>
                <div className="user-box">
                  <div className="user-img" >
                    <img className="profile-img" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Carlos Martinez" />
                    <div className="profile-name">Carlos Martinez</div>
                    <div className="profile-location">Madrid, Spain<nav>
                      <div className="nav-buttons"><a href='./landing.html'> View Story</a></div>
                    </nav>
                    </div>
                  </div>
                </div>
              </div>
              <button className="arrowUser right" >&#10095;</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;