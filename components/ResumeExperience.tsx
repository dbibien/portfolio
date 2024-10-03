import ResumeSectionTitle from "./ResumeSectionTitle"
import ResumeWorkExperience from "./ResumeWorkExperience"
import { Separator } from "./ui/separator"

const workExperienceData = [
  {
    company: "Security Community Management Software (SCMS)",
    position: "Software engineer",
    from: "2024",
    to: "PRESENT",
    location: "Miami, FL",
    tasks: [
      "Developed an application that streamlined management for 743 homes, improving operational efficiency by 30%",
      "Implemented a call notification feature using the Twilio API, reducing user workload by 40% and increasing resident satisfaction",
      "Designed and implemented an SQL database schema, successfully migrating all paper reports to the application for improved data management and accessibility",
      "Improved user experience by adding an automated reporting feature, reducing manual report generation time by 50%",
    ],
  }
]

// helper component

const ResumeExperience = () => {
  return (
    <div>
      <ResumeSectionTitle title="EXPERIENCE" />
      <Separator />

      <div>
        {workExperienceData.map((work, index) => (
          <ResumeWorkExperience key={index} work={work} />
        ))}
      </div>
    </div>
  )
}

export default ResumeExperience
