import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <section className="max-w-[325px] md:max-w-[1280px] mx-auto">
      <NavBar />
      <HeroSection />
    </section>
  );
}

export default App;
