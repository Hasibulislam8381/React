import { About } from "./components/About/About";
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
    </div>
  );
}

export default App;
