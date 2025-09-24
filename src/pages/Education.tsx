import { Education } from "../data";
import EducationCard from "../components/EducationCard";

const EducationSection = () => {
  return (
    <section id="education" className="container mx-auto px-4 py-16 md:py-20">
      <h2 className="text-center mb-10 text-3xl md:text-4xl font-extrabold text-primary">
        Education
      </h2>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {Education.length > 0 ? (
          Education.map((edu) => (
            <EducationCard
              key={`${edu.degree}-${edu.collegeName}`}
              education={edu}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-base-content/70">
            No education to display yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
