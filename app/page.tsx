import About from "./components/about";
import ContactMe from "./components/contact-me";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Work from "./components/work";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}
