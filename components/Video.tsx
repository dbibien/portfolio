const video = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative">
      <iframe
        // className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[480px]"
        className="w-full h-[20rem] lg:w-[30rem] lg:h-[20rem]"
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
