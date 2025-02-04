import Image from "next/image"
import SocialLinkButton from "./SocialLinkButton"
import { Github, RadioTower } from "lucide-react"

const data = {
  title: "Portfolio Site",
  subTitile: "Portfolio website that showcases some of my work",
  videoId: "",
  liveDemoLink: "",
  githubLink: "https:github.com/dbibien/portfolio",
  description: `This is my portfolio website that showcases some of the projects I've worked on`,
  benefits: [
    "Showcases some of my work",
  ],
  tech: {
    frontEnd: "Next.js, React, JavaScript/TypeScript, Shadcn/ui, Tailwindcss",
    backEnd: "N/A",
    other: "Jira, Git, Github",
  },
  note: "",
  order: {
    video: 1,
    description: 2,
  }
}

const PortfolioPorject = () => {
  return (
    <div className="mb-8">
      <h3 className="text-white font-semibold underline text-2xl">{data.title}</h3>
      <h4 className="text-white/75 mb-4">{data.subTitile}</h4>

      <div className="lg:flex lg:flex-row lg:gap-8">
        <div className="w-full h-full relative">
          <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px]">
            <Image
              src="/assets/portfolioSite.png"
              alt="Image of portfolio website"
              priority
              quality={100}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className={`lg:order-${data.order.description}`}>
          <div className="flex justify-center gap-2 mt-4 mb-4 lg:justify-start lg:mt-0 lg:w-[600px]">
            {data.liveDemoLink && (
              <SocialLinkButton
                name="Live Demo"
                path={data.liveDemoLink}
                icon={<RadioTower color="white" size={18} />}
              />
            )}

            {data.githubLink && (
              <SocialLinkButton name="View code"
                path={data.githubLink}
                icon={<Github color="white" size={18} />}
              />
            )}
          </div>

          <div className="text-white/75 text-lg">
            <h4 className="text-white font-semibold">Description:</h4>
            <p>{data.description}</p>

            <h4 className="text-white font-semibold text-md mt-2">Chief benefits of {data.title}:</h4>
            <ul className="list-inside list-disc">
              {data.benefits.map((ben, index) => (
                <li key={index} className="list-item">{ben}</li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-md mt-2">Technology used:</h4>
            <ul className="list-inside list-disc">
              <li className="list-item">
                <span className="font-semibold text-orange-400">Client: </span>{data.tech.frontEnd}
              </li>
              <li className="list-item">
                <span className="font-semibold text-orange-400">Server: </span>{data.tech.backEnd}
              </li>
              <li className="list-item">
                <span className="font-semibold text-orange-400">Other: </span>{data.tech.other}
              </li>
            </ul>

            {data.videoId && (
              <p className="text-white/75 mt-4 text-lg">Take a quick look at the short video demo</p>
            )}

            {data.note && (
              <p className="text-orange-400/75 mt-4 text-sm">* {data.note}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPorject
