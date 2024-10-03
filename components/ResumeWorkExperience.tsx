type CProps = {
  work: {
    company: string,
    position: string,
    from: string,
    to: string,
    location: string,
    tasks: string[],
  }
}

const ResumeWorkExperience = ({ work }: CProps) => {
  return (
    <div>
      <h3 className="text-white mt-2 tracking-wide lg:text-xl ">{work.company} -- <span className="text-white/75">{work.position}</span></h3>
      <div className="flex justify-between text-white/75 text-sm">
        <p>{work.from} - {work.to}</p>
        <p>{work.location}</p>
      </div>

      <div className="mt-4">
        <ul className="list-inside list-disc text-white/75">
          {work.tasks.map((task, index) => (
            <li key={index} className="mb-2">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumeWorkExperience
