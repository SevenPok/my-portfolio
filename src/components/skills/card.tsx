import { type JSX, cloneElement } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
  percent: number;
  color: string;
  level: string;
}

const Card = (props: Skill) => {
  const skill = props;
  return (
    <div
      key={skill.name}
      className="group bg-secondary-light dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:shadow-none cursor-pointer w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="p-3 rounded-lg bg-opacity-10 dark:bg-opacity-20 transition-colors"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          {cloneElement(skill.icon, {
            style: { color: skill.color },
            className: "transition-transform group-hover:scale-110",
          })}
        </div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{skill.name}</h3>
      </div>

      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
        <span
          className="text-sm font-medium text-white px-2 py-1 rounded-full shadow-sm"
          style={{ backgroundColor: skill.color }}
        >
          {skill.percent}%
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-500"
          style={{
            width: `${skill.percent}%`,
            backgroundColor: skill.color,
          }}
        />
      </div>
    </div>
  );
};

export default Card;
