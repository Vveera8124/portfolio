// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { navs } from "../../data";

const Footer: React.FC = () => {
  return (
    <footer className="footer p-10 flex flex-col w-full py-2 md:py-3 inset-shadow-sm inset-shadow-accent shadow shadow-accent">
      <div className="flex flex-col md:flex-row justify-evenly  w-full">
        <section aria-labelledby="footer-about" className="sm:w-1/2 md:w-auto">
          <h2 id="footer-about" className="sr-only">
            About Me
          </h2>
          <p className="font-display text-lg md:text-2xl font-bold text-primary">
            Veera Chinna Perumal
          </p>
          <p className="max-w-xs text-sm md:text-lg">
            Full Stack Developer with a passion for creating innovative,
            scalable, and high-performance solutions.
          </p>
        </section>
        <nav aria-labelledby="footer-links">
          <h2
            className="footer-title font-display text-lg md:text-xl font-bold"
            id="footer-links"
          >
            Links
          </h2>
          <ul className="flex flex-col text-sm md:text-lg">
            {navs.map((nav, i) => (
              <li key={i}>
                <a href={nav.section} className="link link-hover">
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-social">
          <h2
            className="footer-title font-display text-lg md:text-xl font-bold"
            id="footer-social"
          >
            Connect
          </h2>
          <ul className="grid grid-flow-col gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/veera-chinna-perumal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="link link-hover text-2xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vveera8124"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on GitHub"
                className="link link-hover text-2xl"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:vveera8124@gmail.com"
                aria-label="Send an email to Veera Chinna Perumal"
                className="link link-hover text-2xl"
              >
                <IoMail />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-base-300 w-full py-4 text-center">
        <span className="text-sm text-center text-base-content/70">
          &copy; {new Date().getFullYear()} Veera Chinna Perumal. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
