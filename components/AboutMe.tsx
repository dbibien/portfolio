import Image from "next/image"

const technicalSkills = [
  {
    name: "Frontend",
    value: "HTML/CSS/Tailwind, React, JavaScript/TypeScript, Zustand, Chadcnui, Material UI (MUI)",
  },
  {
    name: "Mobile",
    value: "React Native, Nativewind, JavaScript/TypeScript, Zustand",
  },
  {
    name: "Backend",
    value: "Node.js, JavaScript/TypeScript, Go, Python",
  },
  {
    name: "Other",
    value: "HTTP/REST API for communication between client and server",
  },
]

const AboutMe = () => {
  return (
    <>
      <h3 className="text-white font-semibold text-xl">About me</h3>
      <div className="w-full h-full lg:flex lg:gap-8">
        <div className="m-auto w-[350px] h-[50] lg:flex-5">
          <Image
            src="/assets/about.png"
            priority
            quality={100}
            // fill
            width={350}
            height={50}
            alt="about me image"
            className="object-contain"
          />
        </div>

        <div className="flex-1 text-lg text-white/75">
          <p>
            As a Full Stack Software Engineer, I specialize in creating scalable and efficient web applications that deliver seamless user experiences.
            My passion for coding fuels my commitment to staying current with industry trends and best practices, enabling me to deliver high-quality results on every project.
          </p>

          <h3 className="mt-4 text-white font-semibold text-xl">Technical skills:</h3>
          <ul className="list-inside list-disc">
            {technicalSkills.map((skill, index) => (
              <li key={index}>
                <span className="font-semibold text-orange-400">{skill.name}: </span>
                {skill.value}
              </li>

            ))}
          </ul>

          <h3 className="mt-4 text-white font-semibold text-xl">Value offered:</h3>
          <p>I bridge front-end and back-end technologies, offering a holistic perspective on projects.
            My strong knowledge in client and server-side development enables me to create seamless user experiences and robust applications.
            With a solid foundation in diverse programming languages and frameworks, I tackle complex challenges and deliver innovative solutions that meet user needs and drive business goals.
            My commitment to continuous learning keeps me adaptable in this ever-evolving tech landscape.
          </p>
        </div >
      </div >
    </>
  )
}

export default AboutMe


