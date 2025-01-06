import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";

function Contact(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "../src/assets/2.jpg"
                title = "Contact"
                text = "Choose Your Destination."
                btnClass = "hide"></Hero>

        </>
    )
}

export default Contact;
