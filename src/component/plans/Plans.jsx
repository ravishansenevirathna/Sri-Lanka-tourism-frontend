import React, { useState } from "react";
import "./PlansStyles.css";
import NavBar from "../navBar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";

function Plan() {
    const [selectedHotel, setSelectedHotel] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const hotels = ["Hotel Paradise", "Ocean View", "Mountain Retreat"];
    const times = ["Morning", "Afternoon", "Evening"];
    const locations = ["Colombo", "Kandy", "Galle", "Ella"];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation Summary:\nHotel: ${selectedHotel}\nTime: ${selectedTime}\nLocation: ${selectedLocation}`);
    };

    return (
        <div>
            <NavBar></NavBar>
            <div className="background">

        <div className="plan-container">
            <h1 className="plan-title">Plan Your Reservation</h1>
            <form onSubmit={handleSubmit} className="plan-form">
                {/* Hotel Selection */}
                <div className="form-group">
                    <label htmlFor="hotel">Select Hotel:</label>
                    <select
                        id="hotel"
                        value={selectedHotel}
                        onChange={(e) => setSelectedHotel(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            -- Select a Hotel --
                        </option>
                        {hotels.map((hotel, index) => (
                            <option key={index} value={hotel}>
                                {hotel}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Time Selection */}
                <div className="form-group">
                    <label htmlFor="time">Select Time:</label>
                    <select
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            -- Select a Time --
                        </option>
                        {times.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Location Selection */}
                <div className="form-group">
                    <label htmlFor="location">Select Location:</label>
                    <select
                        id="location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            -- Select a Location --
                        </option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="plan-submit">
                    Confirm Plan
                </button>
            </form>
        </div>
            </div>
            <Footer></Footer>
    </div>
    );
}

export default Plan;
