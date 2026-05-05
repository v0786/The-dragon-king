import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => (
  <main className="bg-ink text-bone">
    <Navbar />
    <Hero />
    <About />
    <MenuSection />
    <Gallery />
    <Reservation />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#120B0B",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "#FDF5E6",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
