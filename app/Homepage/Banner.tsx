import MiniBanner from "@/app/common/components/MiniBanner";

const Banner = () => {
  return (
    <>
      <div className="w-full h-screen relative justify-center">
        <video
          className="w-full h-screen object-cover"
          autoPlay
          muted
          loop
          preload="none"
        >
          <source src="/Hapusa.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {/* Ensure MiniBanner has a specific position or z-index */}
      </div>
      <div className="">
        <MiniBanner />
      </div>
    </>
  );
};

export default Banner;
