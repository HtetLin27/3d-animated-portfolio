import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import GetInTouch from "./components/getintouch/GetInTouch";

const App = () => {
  return (
    <div className="container">
      <section id="home" className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      {/* <section id="services" className="section">
        <Services />
      </section> */}
      <section id="portfolio" className="section portfolio-section">
        <Portfolio />
      </section>
      <section id="getintouch" className="section">
        <GetInTouch />
      </section>
      {/* <section id="contact" className="section">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
