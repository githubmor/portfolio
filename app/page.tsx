
import About from "./components/about";
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
        {/* this div is fake just for scroll , delete it in production . darzi */}
        <div className="h-20"></div>
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
