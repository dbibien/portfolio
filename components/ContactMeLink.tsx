import { Send } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    name: "Contact me",
    path: "/contact",
    icon: <Send color="white" size={18} />
  },
]

const ContactMeLink = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:items-center lg:gap-2 items-center">
      {contactLinks.map((social, index) => (
        <Link
          href={social.path}
          key={index}
        >
          <button className="bg-orange-400 hover:bg-orange-500 transition-all w-36 flex gap-2 justify-center items-center p-2 rounded-xl">
            {social.icon}
            <span className="text-white/75 hover:text-white transition-all">{social.name}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default ContactMeLink
