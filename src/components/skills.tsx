import React from "react";
import { FaJs, FaNode, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiTypescript, SiAstro, SiPython } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-2xl" />,
    percent: 85,
    color: "#ffcf49",
  },
  {
    name: "React",
    icon: <FaReact className="text-2xl" />,
    percent: 90,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: <FaNode className="text-2xl" />,
    percent: 80,
    color: "#8CC84B",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-2xl" />,
    percent: 88,
    color: "#3178C6",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-2xl" />,
    percent: 90,
    color: "#000000",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-2xl" />,
    percent: 75,
    color: "#E0234E",
  },
  {
    name: "C#",
    icon: <TbBrandCSharp className="text-2xl" />,
    percent: 70,
    color: "#68217A",
  },
  {
    name: "Astro",
    icon: <SiAstro className="text-2xl" />,
    percent: 40,
    color: "#000000",
  },
  {
    name: "Python",
    icon: <SiPython className="text-2xl" />,
    percent: 60,
    color: "#3776AB",
  },
];

export const Skills = () => {
  return (
    <section className="mt-20 scroll-mt-20" id="skills">
      <h1 className="text-5xl font-bold text-center mb-12">Habilidades Técnicas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:shadow-none cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="p-3 rounded-lg bg-opacity-10 dark:bg-opacity-20 transition-colors"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                {React.cloneElement(skill.icon, {
                  style: { color: skill.color },
                  className: "transition-transform group-hover:scale-110",
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{skill.name}</h3>
            </div>

            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Nivel de Experiencia</span>
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
        ))}
      </div>
    </section>
  );
};
