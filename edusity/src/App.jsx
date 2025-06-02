import { About } from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
