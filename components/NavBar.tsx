"use client"

import Link from "next/link"
import DeskTopNav from "./DeskTopNav"
import MobileNav from "./MobileNav"

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

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-4 pb-4 bg-background sticky top-0 z-[50]">
      <div>
        <Link href="/">
          <h1 className="text-3xl text-white font-semibold">
            DBibien <span className="text-4xl font-bold text-orange-400">.</span>
          </h1>
        </Link>
      </div>

      <div className="hidden lg:flex lg:gap-6">
        <DeskTopNav navButtons={navButtons} />
      </div>

      <div className="lg:hidden">
        <MobileNav navButtons={navButtons} />
      </div>
    </div>
  )
}

export default NavBar
