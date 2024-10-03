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
  },
  {
    company: "MAAPPS Parking, LLC",
    position: "Software engineer",
    from: "2020",
    to: "2024",
    location: "Miami, FL",
    tasks: [
      "Implemented an automated pricing system for valet parking, increasing operational efficiency by 63%",
      "Integrated Stripe for processing millions annually, enhancing guest experience by eliminating physical transactions",
      "Developed a mobile app with React Native, enhancing user experience and reducing client employee onboarding time by 25%, accelerating the process by two weeks",
      "Designed and implemented a REST API with AI capabilities for vehicle recognition, reducing parking time by 75% and increasing throughput by 6x",
    ],
  },
]

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
