import NavBar from "../navBar/NavBar.jsx";
import Hero from "../hero/Hero.jsx";

function About(){
    return(
        <>
            <NavBar></NavBar>
            <Hero
                cName = "hero-mid"
                heroImg = "https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg"
                title = "About"
                btnClass = "hide"></Hero>

        </>
    )
}

export default About;
