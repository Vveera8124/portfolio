import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/header";
import Footer from "./components/footer";

import Hero from "./pages/Hero";

const ExperienceSection = React.lazy(() => import("./pages/Experience"));
const ProjectSection = React.lazy(() => import("./pages/Project"));
const SkillSection = React.lazy(() => import("./pages/Skills"));
const EducationSection = React.lazy(() => import("./pages/Education"));

function App() {
  return (
    <div className="relative top-0 p-0 m-0">
      <h1 className="sr-only">
        Veera Chinna Perumal - Full-Stack Developer Portfolio
      </h1>
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-accent/20 blur-[80px]"></div>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading sections...</div>}>
          <ExperienceSection />
          <ProjectSection />
          <SkillSection />
          <EducationSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
