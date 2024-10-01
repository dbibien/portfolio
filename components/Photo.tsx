"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px]">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Avatar image"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
