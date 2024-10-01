import Link from "next/link"

type CProps = {
  name: string,
  path: string,
  icon: JSX.Element,
}

const SocialLinkButton = ({ name, path, icon }: CProps) => {
  return (
    <Link href={path} >
      <button className="bg-zinc-800 hover:bg-zinc-700 transition-all w-32 flex gap-2 justify-center items-center p-2 rounded-xl">
        {icon}
        <span className="text-white/75 hover:text-white transition-all">{name}</span>
      </button>
    </Link>

  )
}

export default SocialLinkButton
