import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

const DownloadResume = () => {
  return (
    <Link href="/assets/bibien_dauphin_resume.pdf">
      <Button
        variant="outline"
        className="text-lg flex items-center gap-2  w-52 h-12"
      >
        Download Resume
        <Download size="60" />
      </Button>
    </Link>

  )
}

export default DownloadResume 
