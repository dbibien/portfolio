const video = ({ videoId }: { videoId: string }) => {
  return (
    // <div className="relative pb-[56.25%] h-0">
    <div className="h-[50vh]">
      <iframe
        // className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[480px]"
        className="w-full h-full lg:w-[720px] lg:h-[480px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  )
}

export default video;
