const video = ({ videoId }: { videoId?: string }) => {
  return (
    <div className="w-full h-[300px] md:w-[50vw] md:h-[365px] ">
      <iframe
        className="w-full h-full"
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
