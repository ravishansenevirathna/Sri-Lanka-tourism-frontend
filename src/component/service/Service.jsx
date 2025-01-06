import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";
import "../hero/HeroStyles.css"

function Service(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/11/20172113/mirissa-1600x900.jpg"
                title = "Service"
                // text = "Choose Your Destination."
                btnClass = "hide"></Hero>

        </>
    )
}

export default Service;
