import PortfolioPorject from "@/components/PortfolioProject"
import ProjectListing from "@/components/ProjectListing"

const projectListingData = [
  {
    title: "SCMS",
    subTitile: "A community management software for security teams",
    videoId: "Zdrq0CZjbOc?si=THjvLlIRSx5ED34S",
    liveDemoLink: "https://scms-fe.onrender.com/",
    githubLink: "https://github.com/dbibien/scms_fe",
    projImages: [
      {
        name: "scms0.png",
        width: 700,
        height: 650,
      },
      {
        name: "scms1.png",
        width: 700,
        height: 650,
      },
      {
        name: "scms2.png",
        width: 700,
        height: 650,
      }, {
        name: "scms3.png",
        width: 700,
        height: 650,
      },
      // {
      //   name: "scms4copy.png",
      //   width: 200,
      //   height: 300,
      // },
      // {
      //   name: "scms5.png",
      //   width: 200,
      //   height: 650,
      // },
      // {
      //   name: "scms6.png",
      //   width: 200,
      //   height: 650,
      // },
      // {
      //   name: "scms7.png",
      //   width: 200,
      //   height: 650,
      // },
    ],
    description: `
      SCMS is a property management software designed specifically for security teams at gated communities and country clubs. 
      This solution addresses the unique challenges of managing these types of facilities, offering tailored features that streamline operations and improve security protocols.
      SCMS is currently managing a country club with 743 homes, enhancing resident engagement through seamless communication tools and optimizing the reporting process for greater efficiency and accuracy.
    `,
    benefits: [
      "With a push of a button, residents can now be notified of issues/concerns regarding their home and the community",
      "Streamline the reporting process by moving all reports from traditional pen/paper to digital report generation",
      "Since traditional pen/paper reporting is no more, many of the reports are now generated automatically",
    ],
    tech: {
      frontEnd: "React, React-router, Shadcn/ui, Tailwind, JavaScript/TypeScript, Zustand",
      backEnd: "Go, Mysql, Twilio API",
      other: "Jira, Git, Github",
    },
    order: {
      video: 1,
      description: 2,
    }
  },
  {
    title: "MAAPPS Mobile",
    subTitile: "Mobile app that streamline valet parking operation for all establishments offering valet parking to their guests",
    videoId: "PCsdWIAYjrQ?si=q0y5ObO_0ZXBCV4X",
    liveDemoLink: "",
    githubLink: "",
    description: `MAAPPS Mobile is the mobile app portion of a greater set of tools to help improve 
                  valet parking operation for hotels, restaurants and, all establishments/events offereing valet parking to their guests. 
    `,
    benefits: [
      "By efficiently managing all logistical details behind the scenes, valet parking attendants are left to concentrate on parking and retrieving vehicles, empowering them to create memorable guest experiences",
      "Reduce congestion at the payment booth by shifting all transactions to online payments using Stripe",
      "Remove paper tickets entirely by implementing SMS-based digital ticketing",
    ],
    tech: {
      frontEnd: "React Native, Expo, Nativewind, JavaScript/TypeScript, Zod, Zustand",
      backEnd: "Go, Mysql, Redis, Websocket, Twilio, Stripe",
      other: "Jira, Git, Github",
    },
    // note: "This is a Start-Up. The code is not publically available. However, I am happy to further discuss this project with potential employers",
    note: "Repo is private. Please see the video for functionality",
    order: {
      video: 2,
      description: 1,
    }
  },
]

const Projects = () => {
  return (
    <div>
      {projectListingData.map((data, index) => (
        <ProjectListing
          key={index}
          data={data}
          order={data.order}
        />
      ))}
      <PortfolioPorject />
    </div>
  )
}

export default Projects
