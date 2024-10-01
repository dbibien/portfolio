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
        <button
          key={index}
          className="bg-zinc-800 hover:bg-zinc-700 transition-all w-32 flex gap-2 items-center p-2 rounded-xl"
        >
          <Link
            href={social.path}
          >
            {social.icon}
          </Link>
          <span className="text-white">{social.name}</span>
        </button>
      ))}
    </div>
  )
}

export default SocialLinks
