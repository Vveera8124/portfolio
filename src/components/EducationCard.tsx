import { memo } from "react";
import type { Education } from "../types";
interface EducationCardProps {
  education: Education;
}
const EducationCard = memo(({ education }: EducationCardProps) => {
  return (
    <div className="card card-compact border border-base-300 hover:border-accent transition-all duration-300 rounded-2xl shadow-sm shadow-accent hover:shadow-md hover:-translate-y-1">
      <div className="card-body">
        <div className="card-title flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {education.degree}
            </h3>
            <p className="text-base-content/80 text-sm md:text-base">
              {education.collegeName}
            </p>
          </div>
          <div className="text-secondary text-sm md:text-base rounded-md">
            {education.timeline}
          </div>
        </div>
        <span>{education.score}</span>
      </div>
    </div>
  );
});

export default EducationCard;
