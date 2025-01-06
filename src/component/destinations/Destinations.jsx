import './DestinationStyles.css';
import DestinationData from "./DestinationData.jsx";

const Destinations = () => {
    return (
        <div className="destination">
            <h1>Sri Lanka Destinations</h1>
            <p>Discover the hidden gems of Sri Lanka's rich history and vibrant culture. Explore unique attractions, historical sites, and cultural events.</p>
            <DestinationData
                className="first-des"
                heading="Colombo"
                text="The bustling capital of Sri Lanka, Colombo is a mix of modernity and tradition. Visit the iconic Lotus Tower, explore the National Museum, and relax at Galle Face Green."
                img1="https://images.unsplash.com/photo-1623595289196-007a22dd8560?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src1="colombo.jpg"
                img2="https://images.pexels.com/photos/12055673/pexels-photo-12055673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src2="colombo2.jpg"

            ></DestinationData>

            <DestinationData
                className="first-des-reverse"
                heading="Nuwara Eliya"
                text="Known as 'Little England,' Nuwara Eliya is a picturesque town surrounded by rolling tea plantations, colonial-era architecture, and a cool climate. Don't miss the stunning Gregory Lake."
                img1="https://www.bluelankatours.com/wp-content/uploads/2023/08/Train-Riding.jpg"
                src1="nuwaraeliya.jpg"
                img2="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/8d/a2/a4.jpg"
                src2="nuwaraeliya2.jpg"
            />

            <DestinationData
                className="first-des"
                heading="Galle Fort"
                text="Step back in time with a visit to Galle Fort, a UNESCO World Heritage site. This colonial-era fort boasts cobblestone streets, boutique shops, and picturesque views of the ocean."
                img1="https://tripjive.com/wp-content/uploads/2024/10/Galle-lighthouse-introduction-1024x585.jpg"
                src1="galle.jpg"
                img2="https://southern-comforts-guest-house.gallehotelspage.com/data/Pics/OriginalPhoto/15336/1533629/1533629908/southern-comforts-guest-house-galle-pic-7.JPEG"
                src2="galle2.jpg"
            />

            <DestinationData
                className="first-des-reverse"
                heading="Ella"
                text="Ella is a charming hill station known for its scenic beauty, hiking trails, and laid-back vibe. Explore the Nine Arches Bridge, climb Ella Rock, or relax amidst the tea plantations."
                img1="https://static.saltinourhair.com/wp-content/uploads/2016/12/23155430/beautiful-train-ride-sri-lanka-kandy-ella-best-seat.jpg"
                src1="ella.jpg"
                img2="https://airlinescrewtours.com/wp-content/uploads/2022/09/RP-4.jpg"
                src2="ella2.jpg"
            />

            <DestinationData
                className="first-des"
                heading="Yala National Park"
                text="Explore Sri Lanka's wildlife paradise at Yala National Park, home to leopards, elephants, and vibrant bird species. A jeep safari is a must for every nature enthusiast."
                img1="https://cdn.getyourguide.com/img/tour/02f2d9ebf63f43d15abe9659598f5a8831e4090f7fc3a7e6f12af9d34e4ab6c5.jpg/vertical_520_780.jpg"
                src1="yala.jpg"
                img2="https://exoticislandtours.com/wp-content/uploads/2019/09/Yala-National-Park-1.jpg"
                src2="yala2.jpg"
            />
        </div>
    );
};

export default Destinations;
