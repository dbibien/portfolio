import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const DownloadResume = () => {
  return (
    <a
      target="_blank"
      href="/assets/bibien_dauphin_resume.pdf"
      className="hover:bg-orange-400 hover:rounded-xl"
    >
      <Button
        variant="outline"
        className="text-lg flex items-center gap-2  w-52 h-12"
      >
        Download Resume
        <Download size="60" />
      </Button>
    </a>

  )
}

export default DownloadResume 
