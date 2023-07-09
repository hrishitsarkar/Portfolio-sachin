import logo from './logo.svg';
import './App.css';
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from './Components/about/About';
import Skills from './Components/skills/skills';
import Experience from './Components/experience/Experience';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

    </>
  );
}

export default App;
