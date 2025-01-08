import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";
import "../hero/HeroStyles.css"
import Destinations from "../destinations/Destinations.jsx";
import Trip from "../trip/Trip.jsx";
import Footer from "../footer/Footer.jsx";

function Home(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
            cName = "hero"
            heroImg = "https://www.lot.com/content/dam/lot/lot-com/destination-photos/sri-lanka/Sri%20Lanka-2.jpg"
            title = "Your Journey, Your Story!"
            text = "Choose Your Destination."
            buttonText = "Travel Plan"
            url = "/plan"
            btnClass = "show"></Hero>

            <Destinations></Destinations>
            <Trip></Trip>
            <Footer></Footer>

        </>
    )
}

export default Home;
