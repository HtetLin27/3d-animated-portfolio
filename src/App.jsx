import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="container">
      <section id="#home" className="section">
        <Hero />
      </section>
      <section id="#services" className="section">
        <Services />
      </section>
      {/* <section id="portfolio" className="section"> */}
        <Portfolio />
      {/* </section> */}
      <section id="#contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default App;
