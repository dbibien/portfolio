import Link from "next/link"

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <p className="text-2xl font-bold">DBibien <span className="text-4xl font-bold text-orange-400">.</span></p>
      </div>

      <div className="flex gap-3">
        <Link href="/" className="text-xl">Home</Link>
        <Link href="/projects" className="text-xl">Projects</Link>
        <Link href="/resume" className="text-xl">Resume</Link>
      </div>
    </div>
  )
}

export default Nav
