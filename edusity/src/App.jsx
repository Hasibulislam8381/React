import { About } from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Gallery />
      <Testimonial />
    </div>
  );
}

export default App;
