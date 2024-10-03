import DownloadResume from "./DownloadResume"
import ResumeEducation from "./ResumeEducation"
import ResumeExperience from "./ResumeExperience"
import ResumeHeader from "./ResumeHeader"
import ResumeSkills from "./ResumeSkills"

const ResumeInfo = () => {
  return (
    <div className=" lg:w-[60vw] lg:m-auto">
      <DownloadResume />

      <div className="border-[0.3px] p-4 pt-8 mt-4">
        <ResumeHeader />
        <ResumeSkills />
        <ResumeExperience />
        <ResumeEducation />
      </div>
    </div >
  )
}

export default ResumeInfo
