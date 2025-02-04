import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ProjectImage } from "@/common/types"

type CProps = {
  images: ProjectImage[]
}

const ProjectImageCarousel = ({ images }: CProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/2"
          >
            <Image
              src={`/assets/${image?.name}`}
              alt="Image of scms"
              priority
              quality={100}
              width={image?.width}
              height={image?.height}
            // objectFit="contain"
            // fill
            />
          </CarouselItem >
        ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ProjectImageCarousel
