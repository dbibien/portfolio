import Marquee from "react-fast-marquee"
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiJira } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techs = [
  {
    icon: <FaReact color="white" size={32} />,
    title: "React",
  },
  {
    icon: <TbBrandReactNative color="white" size={32} />,
    title: "React Native",
  },
  {
    icon: <TbBrandNextjs color="white" size={32} />,
    title: "Nextjs",
  },
  {
    icon: <SiTypescript color="white" size={32} />,
    title: "Typescript",
  },
  {
    icon: <FaPython color="white" size={32} />,
    title: "Python",
  },
  {
    icon: <FaGolang color="white" size={32} />,
    title: "Go",
  },
  {
    icon: <FaNodeJs color="white" size={32} />,
    title: "Node",
  },
  {
    icon: <SiDjango color="white" size={32} />,
    title: "Django",
  },
  {
    icon: <FaGitAlt color="white" size={32} />,
    title: "Git",
  },
  {
    icon: <FaGithub color="white" size={32} />,
    title: "Github",
  },
  {
    icon: <DiPostgresql color="white" size={32} />,
    title: "Postgresql",
  },
  {
    icon: <DiMysql color="white" size={32} />,
    title: "MySql",
  },
  {
    icon: <FaAws color="white" size={32} />,
    title: "AWS",
  },
  {
    icon: <SiJira color="white" size={32} />,
    title: "Jira",
  },
  {
    icon: <FaHtml5 color="white" size={32} />,
    title: "HTML",
  },
  {
    icon: <FaCss3 color="white" size={32} />,
    title: "CSS",
  },
  {
    icon: <RiTailwindCssFill color="white" size={32} />,
    title: "Tailwind",
  },
]

const Technologies = () => {
  return (
    <>
      <h3 className="text-white font-semibold lg:hidden">Technologies:</h3>
      <Marquee>
        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 mr-4 text-center rounded-lg flex flex-col items-center justify-center"
          >
            {tech.icon}
            <span className="text-white mt-2">{tech.title}</span>
          </div>
        ))}
      </Marquee>
    </>
  )
}

export default Technologies
