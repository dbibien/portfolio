import ResumeHeader from "./ResumeHeader"
import ResumeSkills from "./ResumeSkills"

const ResumeInfo = () => {
  return (
    <div className="border-[0.3px] p-4 pt-8 lg:w-[60vw] lg:m-auto">
      <div>
        <ResumeHeader />
        <ResumeSkills />
      </div>
    </div >
  )
}

export default ResumeInfo
