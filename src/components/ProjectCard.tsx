// ExperienceCard.tsx;
import { memo } from "react";
import type { Project } from "../types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  return (
    <div className="card card-compact border border-base-300 hover:border-accent transition-all duration-300 rounded-2xl shadow-sm shadow-accent hover:shadow-md hover:-translate-y-1">
      <div className="card-body">
        <div className="card-title text-primary flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
            {project.name}
          </h3>
          <div className="flex gap-2 items-center">
            {project.gitHub && (
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Page"
              >
                <FaGithub size={25} className="text-primary" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="website Page"
              >
                <FaExternalLinkAlt size={23} className="text-primary" />
              </a>
            )}
          </div>
        </div>

        <ul className="list-disc list-outside ml-5 mt-4 space-y-2 text-secondary marker:text-accent">
          {project.responsibility.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 items-center">
          {project.stack.map((lib, i) => (
            <div
              className="badge badge-soft badge-accent px-3 py-2 text-secondary font-medium text-sm md:text-base rounded-md"
              key={i}
            >
              {lib}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
