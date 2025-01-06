import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";

function Home(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
            cName = "hero"
            heroImg = "../src/assets/12.jpg"
            title = "Your Journey Your Story"
            text = "Choose Your Destination."
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "show"></Hero>

        </>
    )
}

export default Home;
