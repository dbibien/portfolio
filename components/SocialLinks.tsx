import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const socials = [
  {
    name: "Github",
    path: "https://github.com/dbibien",
    icon: <Github color="white" size={18} />
  },
  {
    name: "LinkedIn",
    path: "https://linkedin.com/in/dbibien",
    icon: <Linkedin color="white" size={16} />
  },
]

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:items-center lg:gap-2 items-center">
      {socials.map((social, index) => (
        <Link
          target="_blank"
          href={social.path}
          key={index}
        >
          <button className="bg-zinc-800 hover:bg-zinc-700 transition-all w-36 flex gap-2 justify-center items-center p-2 rounded-xl">
            {social.icon}
            <span className="text-white/75 hover:text-white transition-all">{social.name}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
