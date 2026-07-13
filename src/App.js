import Navbar from "./Common/Navbar";
import './App.css';
import Hero from "./User/Hero";
import About from "./User/About";
import Testimonials from "./User/Testimonials";
import Services from "./User/Services";
import Industries from "./User/Industries";
import Capabilities from "./User/Capabilities";
import AuditForm from "./User/AuditForm";
import FAQ from "./User/FAQ";
import CTA from "./User/CTA";
import Footer from "./Common/Footer";







function App() {
  return (
    <>
    <div> 
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Industries/>
      <Capabilities />
      <AuditForm />
      <FAQ />
      <CTA />
      <Footer />

    
    </div>

    </>
  );
}

export default App;
