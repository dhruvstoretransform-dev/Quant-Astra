import Navbar from "../Common/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/wrapper.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Services from "../components/Services.jsx";
import Industries from "../components/Industries.jsx";
import Capabilities from "../components/Capabilities.jsx";
import AuditForm from "../components/AuditForm.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../Common/Footer.jsx"; 



function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Testimonials />
            <Services />
            <Industries />
            <Capabilities />
            <AuditForm />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}
 
export default Home;
