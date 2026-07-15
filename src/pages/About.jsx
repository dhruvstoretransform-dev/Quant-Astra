import AboutHero from "../components/AboutHero.jsx";
import Leadership from "../components/Leadership.jsx";
import Philosophy from "../components/Philosophy.jsx";
import Mission from "../components/Mission.jsx";
import Values from "../components/values.jsx";
import Stats from "../components/Stats.jsx";
import Navbar from "../Common/Navbar.jsx";
import Footer from "../Common/Footer.jsx";
import CTA from "../components/CTA.jsx";


function About() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <Leadership />
            <Philosophy/>
            <Mission/>
            <Values/>
            <Stats/>
            <CTA />
            <Footer />
        </>
    );
}

export default About;