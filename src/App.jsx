import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import WorkExperience from "./sections/Experience.jsx";

const App = () => {
  return (
    <main className="w-full mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
