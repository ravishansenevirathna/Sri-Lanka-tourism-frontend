import "./TripStyles.css";
import TripData from "./TripData.jsx";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>
                Discover the breathtaking beauty and rich culture of Sri Lanka through our recent travel experiences. Explore these hidden gems and must-visit destinations.
            </p>

            <div className="tripcard">
                <TripData
                    image="https://tripjive.com/wp-content/uploads/2024/10/best-day-tour-knuckles-mountain-range-1024x585.jpg"
                    heading="Knuckles Mountain Range"
                    title="A haven for adventure seekers, the Knuckles Mountain Range offers hiking trails, diverse wildlife, and stunning mountain views."
                />

                <TripData
                    image="https://rainbowtourssrilanka.com/wp-content/uploads/2017/05/surf11-1024x819.jpg"
                    heading="Arugam Bay"
                    title="Famous for surfing, Arugam Bay is a paradise for water sports enthusiasts, with golden beaches and vibrant nightlife."
                />

                <TripData
                    image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQQELZ4bfY8WKGyf7Gg0EEFlrU-s0e09MuwfUGCT1MNkoJVe0O7L1zCWsX5a7bUMMgvvVxeiEfnCmL6Uh4V1PEe88_KsNhbhjLqzqgF5oxTmybkPqgejyU6Nk5cqJYXC3f54tiSr_UF01z/s1600/6301208809_94b50c343a_b.jpg"
                    heading="Polonnaruwa"
                    title="Step into the ancient kingdom of Polonnaruwa, a UNESCO World Heritage Site with ancient ruins, temples, and royal palaces."
                />

                <TripData
                    image="https://admin.myceylonadventures.com/uploads/Snorkeling_and_Scuba_Diving_in_Trincomalee_6_fa6e0134fd.jpg"
                    heading="Trincomalee"
                    title="Known for its pristine beaches, Koneswaram Temple, and whale-watching opportunities, Trincomalee is a perfect mix of history and beauty."
                />

                <TripData
                    image="https://www.hotelia.lk/images/travelLocations/sub/2310170600486700304.jpg"
                    heading="Sea Turtle Hatchery Mahamodara."
                    title="Dedicated to the conservation of sea turtles, this hatchery rescues turtles endangered by fishing activities and provides a safe haven for their survival."
                />
            </div>
        </div>
    );
}

export default Trip;
