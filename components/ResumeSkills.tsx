import ResumeSectionTitle from "./ResumeSectionTitle"
import TechnicalSkills from "./TechnicalSkills"
import { Separator } from "./ui/separator"
import { technicalSkills } from "@/lib/utils"

const ResumeSkills = () => {
  return (
    <div>
      <ResumeSectionTitle title="SKILLS" />
      <Separator />
      <div className="mt-2">
        <TechnicalSkills
          technicalSkills={technicalSkills}
        />
      </div>
    </div>
  )
}

export default ResumeSkills
