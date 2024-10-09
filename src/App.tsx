import { useEffect} from "react";
import HeroSection from "./components/HeroSection"
import Lenis from "@studio-freight/lenis";

function App() {
  
    
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoothness
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

  }, []);
  return (
    <div >
    <HeroSection/>
    </div>
  )
}

export default App
