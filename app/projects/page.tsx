import ProjectListing from "@/components/ProjectListing"

const projectListingData = [
  {
    title: "SCMS",
    subTitile: "A community management software for security teams",
    videoId: "hdHjjBS4cs8?si=6wHQRzWIYvEej2wc",
    liveDemoLink: "https://scms-fe.onrender.com/",
    githubLink: "https://github.com/dbibien/scms_fe",
    description: `SCMS is a property management software for security teams of gated communities and country clubs. 
                  It tackles specific problems within the existing management approach for these types of facilities. 
                  SCMS currently manages a country club with 743 homes, enhancing resident engagement and optimizing the reporting process.`,
    benefits: [
      "With a push of a button, residents can now be notified of issues/concerns regarding their home and the community",
      "Streamline the reporting process by moving all reports from traditional pen/paper to digital report generation",
      "Since traditional pen/paper reporting is no more, many of the reports are now generated automatically",
    ],
    tech: {
      frontEnd: "React, React-router, Shadcn/ui, Tailwind, JavaScript/TypeScript, Zustand",
      backEnd: "Go, Mysql, Twilio API",
      other: "Jira, Git, Github",
    }
  },
]

const Projects = () => {
  return (
    <div>
      {projectListingData.map((data, index) => (
        <ProjectListing key={index} data={data} />
      ))}
    </div>
  )
}

export default Projects
