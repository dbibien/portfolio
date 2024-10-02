const video = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative h-[40vh] lg:h-auto">
      <iframe
        // className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[480px]"
        className="w-full h-full lg:w-[600px] lg:h-[400px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  )
}

export default video
// <div className="h-[42vh]">
