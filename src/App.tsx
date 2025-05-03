import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ImagesTop from "./components/ImagesTop";
import Menu from "./components/Menu";
import { Drinks } from "./components/Drinks";

export function App() {
    return (
        <div>
          <Navbar />
            <Hero />
            <About />
            <ImagesTop />
            <Menu />
            <Drinks />
        </div>
    )
}