import Photo from "@/components/Photo"
import SocialLinks from "@/components/SocialLinks"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Home = () => {
  return (
    <div className="">

      <div className="lg:flex lg:flex-row">
        <div className="lg:order-2">
          <Photo />
        </div>

        <div className="mt-4 lg:order-1">
          <p className="text-center text-lg text-white tracking-wide underline lg:text-left">Full Stack Software Developer</p>

          <h1 className="text-center text-white font-semibold text-4xl lg:text-left">
            Hello, I am <br /> <span className="text-orange-400">Bibien Dauphin</span>
          </h1>

          <p className="text-center text-white text-lg pt-4 lg:text-left">
            I specialize in creating scalable and efficient web applications that deliver seamless user experiences
          </p>

          <div className="mt-4 flex flex-col gap-4 items-center lg:flex lg:flex-row lg:items-center lg:gap-2">
            <Button
              variant="outline"
              className="text-lg flex items-center gap-2  w-52 h-12"
            >
              Download Resume
              <Download size="60" />
            </Button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
