import ResumeSectionTitle from "./ResumeSectionTitle"
import TechnicalSkills from "./TechnicalSkills"
import { Separator } from "./ui/separator"
import { technicalSkills } from "@/lib/utils"

const skillList = ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Node", "Express", "Jest", "Python",
  "Go", "Django", "Gofiber", "Echo", "HTML", "CSS", "Tailwind", "Nativewind", "Git", "Github", "CI/CD", "AWS/S3", "REST API",
  "Database/SQL", "Unit testing", "Jira", "Front end", "Back end", "Full stack",
]

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

// <div className="mt-2">
//   {skillList.map((sill, index) => (
//     <span
//       key={index}
//       className="text-white/75"
//     > {sill} |
//     </span>
//   ))}
// </div>
