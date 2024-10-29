
import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
