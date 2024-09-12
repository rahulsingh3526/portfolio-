import dynamic from "next/dynamic";
import HeroContent from "../sub/HeroContent";

const Video = dynamic(() => import("./Video"), { ssr: false });

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <Video />
      <HeroContent />
    </div>
  );
};

export default Hero;
