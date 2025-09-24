// ExperienceSection.tsx
import { Experience } from "../data";
import ExperienceCard from "../components/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-20">
      <h2 className="text-center mb-10 text-3xl md:text-4xl font-extrabold text-primary">
        Experience
      </h2>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {Experience.length > 0 ? (
          Experience.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              experience={exp}
            />
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

export default ExperienceSection;
