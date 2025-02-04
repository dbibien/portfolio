import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectImageCarousel from "./ProjectImageCarousel"
import { ProjectImage } from "@/common/types"
import Video from "./Video"
import Image from "next/image"

type CProps = {
  images: ProjectImage[],
  videoId: string | undefined,
}

const ProjectMedia = ({ images, videoId }: CProps) => {
  return (
    <Tabs defaultValue="Images" className="">
      <TabsList className="bg-transparent text-white/50 flex flex-row mb-4">
        <div className="m-auto bg-zinc-800 p-1 rounded-lg">
          <TabsTrigger
            value="Images"
            className="data-[state=active]:bg-zinc-700 data-[state=active]:text-orange-400"
          >
            Images
          </TabsTrigger>
          <TabsTrigger
            value="Video"
            className="data-[state=active]:bg-zinc-700 data-[state=active]:text-orange-400"
          >
            Video
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="Images" className="mb-4">
        <div className="w-[70vw] m-auto">
          <ProjectImageCarousel
            images={images}
          />
        </div>
      </TabsContent>
      <TabsContent value="Video">
        {videoId !== "" ? (
          <div className="flex flex-row justify-center">
            <Video videoId={videoId} />
          </div>
        ) : (
          <div className="w-full h-full relative">
            <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px]">
              <Image
                src="/assets/portfolioSite.png"
                alt="Image of portfolio website"
                priority
                quality={100}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

export default ProjectMedia
