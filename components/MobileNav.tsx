import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

type CProps = {
  navButtons: {
    name: string,
    path: string,
  }[]
}

const MobileNav = ({ navButtons }: CProps) => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu color="#fb923c" />
        </SheetTrigger>

        <SheetContent className="pb-4">
          <SheetTitle></SheetTitle>
          <div className="flex flex-col justify-center items-center">
            {navButtons.map((button, index) => (
              <nav
                key={index}
                className={`text-lg text-center w-full pt-8 hover:text-orange-400 capitalize transition-all 
                            ${pathname === button.path ? "text-orange-400 border-b-2 border-orange-400" : "text-white"}`}
              >
                <Link
                  href={button.path}
                  onClick={() => setOpen(false)}
                >
                  {button.name}
                </Link>
              </nav>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav 
