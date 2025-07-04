import { FaJs, FaNode, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiAstro, SiNestjs, SiPython, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Card from "./card";
import type { Lang } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

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
    color: "#0d1113",
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
    color: "#0d1113",
  },
  {
    name: "Python",
    icon: <SiPython className="text-2xl" />,
    percent: 60,
    color: "#3776AB",
  },
];

export const Skills = ({ lang }: { lang: Lang }) => {
  const t = useTranslations(lang);

  return (
    <section className="flex flex-col items-center mt-15 scroll-mt-20" id="skills">
      <h1 className="text-4xl font-extrabold leading-tight font-display text-center">{t("skills.title")}</h1>
      <p className="text-muted-foreground text-center mb-10 mt-4 text-balance">{t("skills.description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {skills.map((skill) => (
          <Card key={skill.name} {...skill} level={t("skills.level")} />
        ))}
      </div>
    </section>
  );
};
