import Link from "next/link"

const navButtons = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Resume",
    path: "/resume"
  },
]

const Nav = () => {

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <p className="text-2xl font-bold">DBibien <span className="text-4xl font-bold text-orange-400">.</span></p>
      </div>

      <div className="flex gap-3">
        {navButtons.map((button, index) => (
          <Link key={index} href={button.path} className="text-xl">{button.name}</Link>
        ))
        }
      </div>
    </div>
  )
}

export default Nav
