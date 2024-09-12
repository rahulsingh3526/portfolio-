import dynamic from "next/dynamic";

const Video = dynamic(() => import("./Video"), { ssr: false });

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <Video />
    </div>
  );
};

export default Hero;
