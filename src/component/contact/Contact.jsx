import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";
import "../hero/HeroStyles.css"
import Footer from "../footer/Footer.jsx";
import ContactForm from "./ContactForm.jsx";

function Contact(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "https://www.intrepidtravel.com/adventures/wp-content/uploads/2024/03/Intrepid-Travel-Intrepid-travel_SRI-LANKA_NANU-OYA_RAILWAY-STATION_136-1-1.jpg"
                title = "Contact"
                text = "Choose Your Destination."
                btnClass = "hide"></Hero>
            <ContactForm></ContactForm>
            <Footer></Footer>

        </>
    )
}

export default Contact;
