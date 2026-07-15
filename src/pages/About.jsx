import AboutHero from "../componetns/AboutHero"
import Leadership from "../componetns/Leadership";
import Philosophy from "../componetns/Philosophy";
import Mission from "../componetns/Mission";
import Values from "../componetns/values";
import Stats from "../componetns/Stats";


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