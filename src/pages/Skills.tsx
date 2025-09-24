import { Skills } from "../data";
import SkillCard from "../components/SkillsCard";

const SkillSection = () => {
  return (
    <section id="skills" className="px-4 py-16 md:py-20">
      <h2 className="text-center mb-10 text-3xl md:text-4xl font-extrabold text-primary">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 max-w-5xl mx-auto items-stretch">
        {Skills.length > 0 ? (
          Skills.map((skill, i) => <SkillCard key={i} skill={skill} />)
        ) : (
          <p className="text-center col-span-full text-base-content/70">
            No professional Skill to display yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
