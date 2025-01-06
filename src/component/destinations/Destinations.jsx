import './DestinationStyles.css';

const Destinations = () => {
    return (
        <div className="destination">
            <h1>Sri Lanka Destinations</h1>
            <p>Discover the hidden gems of Sri Lanka's rich history and vibrant culture. Explore unique attractions, historical sites, and cultural events.</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Colombo</h2>
                    <p>
                        Known as the City of Joy, Colombo is a bustling metropolis with vibrant nightlife, cultural scenes, and a rich history.
                        Visit the iconic Wattpatha Museum, the Gayan Museum, and the Rathnayaka Museum.
                    </p>
                </div>
                <div className="image">
                    <img src="../../assets/1.jpg" alt="Colombo" />
                    <img src="../../assets/2.jpg" alt="Colombo2" />
                </div>
            </div>
        </div>
    );
};

export default Destinations;
