import AboutHero from "../components/AboutHero.jsx";
import Leadership from "../components/Leadership.jsx";
import Philosophy from "../components/Philosophy.jsx";
import Mission from "../components/Mission.jsx";
import Values from "../components/values.jsx";
import Stats from "../components/Stats.jsx";


function About() {
    return (
        <>
            <AboutHero />
            <Leadership />
            <Philosophy/>
            <Mission/>
            <Values/>
            <Stats/>
        </>
    );
}

export default About;