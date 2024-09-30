import Link from "next/link"
import { usePathname } from "next/navigation"

type CProps = {
  navButtons: {
    name: string,
    path: string,
  }[]
}

const DeskTopNav = ({ navButtons }: CProps) => {
  const pathname = usePathname()

  return (
    <>
      {navButtons.map((button, index) => (
        <Link
          key={index}
          href={button.path}
          className={`text-lg hover:text-orange-400 hover:border-b-2 hover:border-orange-400 capitalize transition-all 
                    ${pathname === button.path ? "text-orange-400 border-b-2 border-orange-400" : "text-white"}`}
        >
          {button.name}
        </Link>
      ))}
    </>

  )
}

export default DeskTopNav 
