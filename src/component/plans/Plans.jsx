import React, { useState } from "react";
import "./PlansStyles.css";
import NavBar from "../navBar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";

function Plan() {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [numTourists, setNumTourists] = useState(1);

    const hotels = [
        { name: "Hotel Paradise", description: "A luxurious beachside hotel.", rating: 5, price: 200 },
        { name: "Ocean View", description: "Stunning ocean views and amenities.", rating: 4, price: 150 },
        { name: "Mountain Retreat", description: "Peaceful retreat in the mountains.", rating: 4.5, price: 180 },
    ];

    const locations = [
        { name: "Colombo", description: "The bustling capital city.", price: 20 },
        { name: "Kandy", description: "The city of culture and history.", price: 30 },
        { name: "Galle", description: "A historic coastal city.", price: 25 },
        { name: "Ella", description: "A scenic hill station.", price: 35 },
    ];

    const times = ["Morning", "Afternoon", "Evening"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalCost =
            (selectedHotel?.price || 0) +
            (selectedLocation?.price || 0) +
            (numTourists * 50); // Example tourist cost multiplier
        alert(
            `Reservation Summary:\nHotel: ${selectedHotel?.name}\nLocation: ${selectedLocation?.name}\nTime: ${selectedTime}\nNumber of Tourists: ${numTourists}\nTotal Cost: $${totalCost}`
        );
    };

    return (
        <div>
            <NavBar />
            <div className="background">
                <div className="plan-container">
                    <h1 className="plan-title">Plan Your Reservation</h1>
                    <form onSubmit={handleSubmit} className="plan-form">
                        {/* Hotel Selection */}
                        <div>
                            <h2>Select a Hotel:</h2>
                            <div className="tile-container">
                                {hotels.map((hotel, index) => (
                                    <div
                                        key={index}
                                        className={`tile ${selectedHotel === hotel ? "selected" : ""}`}
                                        onClick={() => setSelectedHotel(hotel)}
                                    >
                                        <h3>{hotel.name}</h3>
                                        <p>{hotel.description}</p>
                                        <p>⭐ {hotel.rating} Stars</p>
                                        <p>${hotel.price} per night</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Selection */}
                        <div>
                            <h2>Select a Location:</h2>
                            <div className="tile-container">
                                {locations.map((location, index) => (
                                    <div
                                        key={index}
                                        className={`tile ${selectedLocation === location ? "selected" : ""}`}
                                        onClick={() => setSelectedLocation(location)}
                                    >
                                        <h3>{location.name}</h3>
                                        <p>{location.description}</p>
                                        <p>${location.price} additional</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div>
                            <h2>Select Time:</h2>
                            <div className="tile-container">
                                {times.map((time, index) => (
                                    <div
                                        key={index}
                                        className={`tile ${selectedTime === time ? "selected" : ""}`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        <h3>{time}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Number of Tourists */}
                        <div className="form-group">
                            <label htmlFor="numTourists">Number of Tourists:</label>
                            <input
                                type="number"
                                id="numTourists"
                                min="1"
                                value={numTourists}
                                onChange={(e) => setNumTourists(Number(e.target.value))}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="plan-submit">
                            Confirm Plan
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Plan;
