import { Projects } from "../data";
import ProjectCard from "../components/ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-20">
      <h2 className="text-center mb-10 text-3xl md:text-4xl font-extrabold text-primary">
        Projects
      </h2>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {Projects.length > 0 ? (
          Projects.map((project, i) => (
            <ProjectCard key={`${project.name}-${i}`} project={project} />
          ))
        ) : (
          <p className="text-center col-span-full text-base-content/70">
            No professional experience to display yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
