import {
  About,
  ContactMe,
  Experience,
  Footer,
  Header,
  Hero,
  Skills,
  // Testimonials,
  Work,
} from "./(sections)";

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
        {/* <Testimonials /> */}
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}
