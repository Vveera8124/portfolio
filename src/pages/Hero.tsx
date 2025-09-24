import hero from "../assets/hero2.webp";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section id="about" className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16">
        {/* Image */}
        <img
          src={hero}
          alt="Professional headshot of Veera Chinna Perumal"
          className="w-full max-w-sm rounded-lg object-cover"
          width={384}
          height={538}
          decoding="async"
          fetchPriority="high"
        />

        {/* Text */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            <span className="text-secondary font-medium block mb-2">
              Full-Stack Developer
            </span>
            Crafting Scalable, High-Performance Web Applications
          </h1>

          <p className="text-secondary text-lg">
            I specialize in building production-grade solutions with React,
            Node.js, and modern system design principles. I focus on writing
            clean, maintainable code to solve real-world challenges.
          </p>

          <p className="text-secondary text-lg">
            With 2+ years of experience designing e-commerce platforms,
            API-driven architectures, and performance-optimized applications, my
            goal is to contribute to impactful engineering teams.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#projects" className="btn btn-primary rounded-lg">
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/veera-chinna-perumal-v-426032240/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="btn btn-ghost rounded-lg"
            >
              <FaLinkedin size={25} color="#0a66c2" /> LinkedIn
            </a>
            <a
              href="https://github.com/Vveera8124"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn btn-ghost rounded-lg"
            >
              <FaGithub size={25} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
