import { Separator } from "./ui/separator"
import ResumeHeader from "./ResumeHeader"

const ResumeInfo = () => {
  return (
    <div className="border-[0.3px] p-4 pt-8 lg:w-[50vw] lg:m-auto">
      <div>
        <ResumeHeader />

        <div>
          <h3 className="mt-4 text-white font-semibold text-xl">Skills</h3>
          <Separator />
        </div>
      </div >
    </div >
  )
}

export default ResumeInfo
