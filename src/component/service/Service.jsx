import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";
import "../hero/HeroStyles.css"

function Service(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "https://sonofthemorninglight.wordpress.com/wp-content/uploads/2019/05/img_9968.jpg"
                title = "Service"
                // text = "Choose Your Destination."
                btnClass = "hide"></Hero>

        </>
    )
}

export default Service;
