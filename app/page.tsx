import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* this div is fake just for scroll , delete it in production . darzi */}
        <div className="h-20"></div>
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
