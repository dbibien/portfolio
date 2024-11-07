type CProps = {
  technicalSkills: {
    name: string,
    value: string,
  }[]
}

const TechnicalSkills = ({ technicalSkills }: CProps) => {
  return (
    <ul className="list-inside list-disc text-white/75">
      {technicalSkills.map((skill, index) => (
        <li key={index}>
          <span className="font-semibold text-orange-400">{skill.name}: </span>
          {skill.value}
        </li>

      ))}
    </ul>
  )
}

export default TechnicalSkills
