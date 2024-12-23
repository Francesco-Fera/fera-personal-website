import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto over'>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
