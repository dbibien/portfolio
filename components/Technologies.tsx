import Marquee from "react-fast-marquee"
import { SiTypescript, SiDjango, SiJira } from "react-icons/si"
import { FaHtml5, FaCss3, FaNodeJs, FaGithub, FaGitAlt, FaReact, FaAws, FaPython } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb"
import { DiPostgresql, DiRedis, DiMysql } from "react-icons/di"
import { FaGolang } from "react-icons/fa6"

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
    icon: <DiRedis color="white" size={32} />,
    title: "Redis",
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
