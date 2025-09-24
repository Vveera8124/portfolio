// ExperienceCard.tsx;
import { memo } from "react";
import type { Skill } from "../types";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

interface SkillCardProps {
  skill: Skill;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    SiRedux,
    SiTailwindcss,
    SiMui,
    SiFramer,
    SiExpress,
    SiFirebase,
    SiMysql,
    SiMongodb,
    SiNetlify,
    SiPostman,
    AiOutlineApi,
  };

const SkillCard = memo(({ skill }: SkillCardProps) => {
  return (
    <div className="card card-compact border border-base-300 hover:border-accent transition-all duration-300 rounded-2xl shadow-sm shadow-accent hover:shadow-md hover:-translate-y-1">
      <div className="card-body">
        <h3 className="card-title text-xl font-display text-accent tracking-wide italic mb-4">
          {skill.topic}
        </h3>
        <div className="flex flex-wrap gap-4">
          {skill.lists.map((item, itemIndex) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={itemIndex}
                className="flex flex-col justify-center items-center"
              >
                {IconComponent && (
                  <span
                    className={`text-4xl transition-all duration-200  hover:shadow-sm hover:shadow-secondary border border-secondary ${item.color} p-1 rounded-xl`}
                  >
                    <IconComponent />
                  </span>
                )}
                <span className="mt-2 text-xs text-secondary">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
export default SkillCard;
