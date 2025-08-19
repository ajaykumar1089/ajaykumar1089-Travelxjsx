import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Slider from "rc-slider";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";
import "./HotelSearchFilter";

const HotelSearchFilter = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    console.log({
      checkIn,
      checkOut,
      priceRange,
      guests,
    });
    // You can call an API here
  };

  return (
    <div className="search-container">
      <h2>Find Your Stay</h2>

      <div className="form-group">
        <label>Check-In</label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          placeholderText="Select check-in date"
        />
      </div>

      <div className="form-group">
        <label>Check-Out</label>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn}
          placeholderText="Select check-out date"
        />
      </div>

      <div className="form-group">
        <label>Price Range (${priceRange[0]} - ${priceRange[1]})</label>
        <Slider
          range
          min={0}
          max={1000}
          defaultValue={priceRange}
          onChange={setPriceRange}
        />
      </div>

      <div className="form-group">
        <label>Guests</label>
        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      <button className="search-button" onClick={handleSearch}>
        Search Hotels
      </button>
    </div>
  );
};

export default HotelSearchFilter;
