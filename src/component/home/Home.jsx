import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";
import "../hero/HeroStyles.css"
import Destinations from "../destinations/Destinations.jsx";

function Home(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
            cName = "hero"
            heroImg = "https://travelrebels.com/wp-content/uploads/2024/05/Horton-Plains-hike-nuwara-eliya.jpg"
            title = "Your Journey Your Story"
            text = "Choose Your Destination."
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "show"></Hero>

            <Destinations></Destinations>

        </>
    )
}

export default Home;
