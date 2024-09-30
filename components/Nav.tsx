"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

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
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link href="/">
          <h1 className="text-3xl text-white font-semibold">
            DBibien <span className="text-4xl font-bold text-orange-400">.</span>
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex sm:gap-6">
        {navButtons.map((button, index) => (
          <Link
            key={index}
            href={button.path}
            className={`text-lg hover:text-orange-400 hover:border-b-2 hover:border-orange-400 capitalize transition-all ${pathname === button.path ? "text-orange-400 border-b-2 border-orange-400" : "text-white"}`}
          >
            {button.name}
          </Link>
        ))}
      </div>

      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu color="white" />
          </SheetTrigger>

          <SheetContent className="pb-4">
            <SheetTitle></SheetTitle>
            <div className="flex flex-col justify-center items-center">
              {navButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.path}
                  className={`text-lg text-center w-full pt-6 hover:text-orange-400 hover:border-b-2 hover:border-orange-400 capitalize transition-all ${pathname === button.path ? "text-orange-400 border-b-2 border-orange-400" : "text-white"}`}
                  onClick={() => setOpen(false)}
                >
                  {button.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Nav
