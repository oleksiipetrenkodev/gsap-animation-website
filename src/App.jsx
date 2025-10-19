import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
  return (
    <main className="relative min-h-sceen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
