import { Github, RadioTower } from "lucide-react"
import SocialLinkButton from "./SocialLinkButton"
import Video from "./Video"

const ProjectListing = () => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg lg:text-2xl">SCMS</h3>
      <h4 className="text-white/75 mb-2">A community management software for security teams</h4>

      <div className="lg:flex lg:flex-row lg:gap-8">
        <div>
          <Video videoId="hdHjjBS4cs8?si=6wHQRzWIYvEej2wc" />
        </div>

        <div>
          <div className="flex justify-center gap-2 mt-4 mb-4 lg:justify-start lg:mt-0 lg:w-[600px]">
            <SocialLinkButton name="Live Demo" path="https://scms-fe.onrender.com/" icon={<RadioTower color="white" size={18} />} />
            <SocialLinkButton name="Github" path="https://github.com/dbibien/scms_fe" icon={<Github color="white" size={18} />} />
          </div>

          <div className="text-white/75 text-lg">
            <h4 className="text-white font-semibold">Description:</h4>
            <p>
              SCMS is a property management software for security teams of gated communities and country clubs.
              It tackles specific problems within the existing management approach for these types of facilities.
              SCMS currently manages a country club with 743 homes, enhancing resident engagement and optimizing the reporting process.
            </p>

            <h4 className="text-white font-semibold text-md mt-2">Chief benefits of SCMS:</h4>
            <ul className="list-inside list-disc">
              <li className="list-item">With a push of a button, residents can now be notified of issues/concerns regarding their home and the community</li>
              <li className="list-item">Streamline the reporting process by moving all reports from traditional pen/paper to digital report generation</li>
              <li className="list-item">Since traditional pen/paper reporting is no more, many of the reports are now generated automatically</li>
            </ul>

            <h4 className="text-white font-semibold text-md mt-2">Technology used:</h4>
            <ul className="list-inside list-disc">
              <li className="list-item">
                <span className="font-semibold text-orange-400">Frontend: </span> React, React-router, Shadcn/ui, Tailwind, JavaScript/TypeScript, Zustand
              </li>
              <li className="list-item">
                <span className="font-semibold text-orange-400">Backend: </span> Go, Mysql, Twilio API
              </li>
              <li className="list-item">
                <span className="font-semibold text-orange-400">Other: </span>Jira, Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListing


// <iframe width="560" height="315" src="https://www.youtube.com/embed/hdHjjBS4cs8?si=6wHQRzWIYvEej2wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
