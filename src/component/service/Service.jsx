import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";

function Service(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "https://i.pinimg.com/originals/57/6f/13/576f13107b6629968967dd78c89d99d4.jpg"
                title = "Service"
                text = "Choose Your Destination."
                btnClass = "hide"></Hero>

        </>
    )
}

export default Service;
