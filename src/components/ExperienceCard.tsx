// ExperienceCard.tsx;
import { memo } from "react";
import type { Experience } from "../types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = memo(({ experience }: ExperienceCardProps) => {
  return (
    <div className="card card-compact border border-base-300 hover:border-accent transition-all duration-300 rounded-2xl shadow-sm shadow-accent hover:shadow-md hover:-translate-y-1">
      <div className="card-body">
        <div className="card-title flex flex-col md:flex-row justify-between items-start md:items-center text-primary gap-2">
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {experience.role}
            </h3>
            <p className="text-base-content/80 text-sm md:text-base">
              {experience.company}, {experience.location}
            </p>
          </div>
          <div className="badge badge-outline border-accent px-3 py-2 text-secondary text-sm md:text-base rounded-md">
            {experience.duration}
          </div>
        </div>

        <ul className="list-disc list-outside ml-5 mt-4 space-y-2 text-secondary marker:text-accent">
          {experience.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ExperienceCard;
