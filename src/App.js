import Navbar from "./Common/Navbar";
import './App.css';
import Hero from "./User/Hero";
import About from "./User/About";
import Testimonials from "./User/Testimonials";
import Services from "./User/Services";
import Industries from "./User/Industries";
import Capabilities from "./User/Capabilities";



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

    

     

    </div>

    </>
  );
}

export default App;
