import { Github, RadioTower } from "lucide-react"
import SocialLinkButton from "./SocialLinkButton"
import { ProjectImage } from "@/common/types"
import ProjectMedia from "./ProjectMedia"

type CProps = {
  data: {
    title: string,
    subTitile: string,
    videoId?: string,
    liveDemoLink?: string,
    githubLink?: string,
    description: string,
    projImages: ProjectImage[],
    benefits: string[],
    tech: {
      frontEnd: string,
      backEnd: string,
      other: string,
    }
    note?: string,
  },
  order?: {
    video: number,
    description: number,
  }
}

const ProjectListing = ({ data, order = { video: 1, description: 2 } }: CProps) => {
  return (
    <div className="mb-8 lg:mb-32">
      <h3 className="text-white font-semibold underline text-2xl">{data.title}</h3>
      <h4 className="text-white/75 mb-2">{data.subTitile}</h4>

      <ProjectMedia
        images={data.projImages}
        videoId={data?.videoId}
      />

      <div className="lg:flex lg:flex-row lg:gap-8">
        <div className={`lg:order-${order.description}`}>
          <div className="flex justify-center gap-2 mt-4 mb-4 lg:mt-4">
            {data.liveDemoLink && (
              <SocialLinkButton
                name="Live Demo"
                path={data.liveDemoLink}
                icon={<RadioTower color="white" size={18} />}
              />
            )}

            {data.githubLink && (
              <SocialLinkButton name="Github"
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
      </div >
    </div >
  )
}

export default ProjectListing
