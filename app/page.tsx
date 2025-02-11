import AboutMe from "@/components/AboutMe"
import ContactMeLink from "@/components/ContactMeLink"
import DownloadResume from "@/components/DownloadResume"
import Photo from "@/components/Photo"
import SocialLinks from "@/components/SocialLinks"
import Technologies from "@/components/Technologies"

const Home = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:order-2">
          <Photo />
        </div>

        <div className="mt-2 lg:order-1">
          <p className="text-center text-lg text-white/75 tracking-wide lg:text-left">Full Stack Software Developer</p>

          <h1 className="text-center text-white font-semibold text-4xl lg:text-left">
            Hello, I am <br /> <span className="text-orange-400 tracking-wide">Bibien Dauphin</span>
          </h1>

          <p className="text-center text-white/75 text-lg pt-4 lg:text-left">
            I specialize in creating scalable and efficient web applications that deliver seamless user experiences
          </p>

          <div className="mt-4 flex flex-col gap-4 items-center lg:flex lg:flex-row lg:items-center lg:gap-2">
            <DownloadResume />
            <SocialLinks />
            <ContactMeLink />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Technologies />
      </div>

      <div className="mt-4">
        <AboutMe />
      </div>
    </div>
  )
}

export default Home
