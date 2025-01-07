import "./TripStyles.css";
import TripData from "./TripData.js";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>
                Discover the breathtaking beauty and rich culture of Sri Lanka through our recent travel experiences. Explore these hidden gems and must-visit destinations.
            </p>

            <div className="tripcard">
                <TripData
                    image="https://images.unsplash.com/photo-1528663761259-71e2c04387f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    heading="Knuckles Mountain Range"
                    title="A haven for adventure seekers, the Knuckles Mountain Range offers hiking trails, diverse wildlife, and stunning mountain views."
                />

                <TripData
                    image="https://images.unsplash.com/photo-1594979636768-1c9cdb38ab95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    heading="Arugam Bay"
                    title="Famous for surfing, Arugam Bay is a paradise for water sports enthusiasts, with golden beaches and vibrant nightlife."
                />

                <TripData
                    image="https://images.unsplash.com/photo-1572089566558-12c1f5cc0a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    heading="Polonnaruwa"
                    title="Step into the ancient kingdom of Polonnaruwa, a UNESCO World Heritage Site with ancient ruins, temples, and royal palaces."
                />

                <TripData
                    image="https://images.unsplash.com/photo-1612165958320-9d77631cbeb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    heading="Trincomalee"
                    title="Known for its pristine beaches, Koneswaram Temple, and whale-watching opportunities, Trincomalee is a perfect mix of history and beauty."
                />

                <TripData
                    image="https://images.unsplash.com/photo-1599707215750-8dcb23c64be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    heading="Udawalawe National Park"
                    title="Experience a safari adventure at Udawalawe National Park, home to herds of elephants, leopards, and exotic birds."
                />
            </div>
        </div>
    );
}

export default Trip;
