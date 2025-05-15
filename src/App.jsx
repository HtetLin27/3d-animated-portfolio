import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
const Hero = lazy(() => import("./components/hero/Hero"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const GetInTouch = lazy(() => import("./components/getintouch/GetInTouch"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="home" className="section">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="about" className="section">
            <About />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense height={"100vh"} fallback={"loading..."}>
        <LazyLoad offset={-100}>
          <section id="experience" className="section">
            <Experience />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="portfolio" className="section portfolio-section">
            <Portfolio />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="getintouch" className="section">
            <GetInTouch />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
