import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { data } from "@/data/data";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero data={data} />
      <About data={data} />
      <Skills skillCategories={data.skillCategories} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Education education={data.education} achievements={data.achievements} />
      <Footer />
    </div>
  );
};

export default Home;
