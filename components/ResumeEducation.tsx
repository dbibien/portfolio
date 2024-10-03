import ResumeSectionTitle from "./ResumeSectionTitle"
import { Separator } from "./ui/separator"

const ResumeEducation = () => {
  return (
    <div>
      <ResumeSectionTitle title="EDUCATION" />
      <Separator />
      <p className="text-white/75 mt-2">Florida International University - Bachelor of Science, Computer Science</p>
    </div>
  )
}

export default ResumeEducation
