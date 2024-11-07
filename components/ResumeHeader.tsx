import Link from "next/link"

const ResumeHeader = () => {
  return (
    <>
      <h1 className="text-orange-400 text-center font-semibold text-4xl tracking-wide">Bibien Dauphin</h1>
      < h3 className="text-white/75 text-center mt-2 text-2xl tracking-wide" > Software Engineer</h3 >

      <div className="flex flex-col text-center gap-4 mt-4 lg:flex lg:flex-row lg:justify-around lg:m-auto lg:mt-2">
        <p className="text-orange-400 text-xl hover:text-orange-500">
          Dbibien+career@gmail.com
        </p>

        <Link
          href="https://github.com/dbibien"
          target="_blank" // allows links to open on a different page
          className="text-orange-400 text-xl hover:text-orange-500"
        >
          Github.com/dbibien
        </Link>
        <Link
          href="https://linkedin.com/in/dbibien"
          target="_blank" // allows links to open on a different page
          className="text-orange-400 text-xl hover:text-orange-500"
        >
          Linkedin.com/in/dbibien
        </Link>
      </div>
    </>
  )
}

export default ResumeHeader
