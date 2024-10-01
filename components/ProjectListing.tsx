import { Github, RadioTower } from "lucide-react"
import SocialLinkButton from "./SocialLinkButton"
import Video from "./Video"

const ProjectListing = () => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-2">SCMS: <span>A community management software for security teams</span></h3>

      <div className="lg:flex flex-row gap-8">
        <div>
          <Video videoId="hdHjjBS4cs8?si=6wHQRzWIYvEej2wc" />

          <div className="flex gap-2 justify-center lg:w-[720px]">
            <SocialLinkButton name="Live Demo" path="https://scms.onrender.com" icon={<RadioTower color="white" size={18} />} />
            <SocialLinkButton name="Github" path="https://github.com/dbibien/scms_fe" icon={<Github color="white" size={18} />} />
          </div>
        </div>

        <div className="text-white/75 text-lg">
          <h4 className="text-white font-semibold">Description</h4>
          <p>
            SCMS streamlines property management, giving security teams in gated communities and country clubs improved oversight.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectListing


// <iframe width="560" height="315" src="https://www.youtube.com/embed/hdHjjBS4cs8?si=6wHQRzWIYvEej2wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
